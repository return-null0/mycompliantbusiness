"use strict";
// ---------- Small fetch helpers ----------
async function postJSON(url, body) {
    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify(body),
    });
    if (!res.ok)
        throw new Error(await res.text());
    return (await res.json());
}
async function getJSON(url) {
    const res = await fetch(url, { credentials: "same-origin" });
    if (!res.ok)
        throw new Error(await res.text());
    return (await res.json());
}
// ---------- DOM refs ----------
const $ = (sel) => document.querySelector(sel);
const sessionEl = $("#session");
const questionsEl = $("#questions");
const obligationsUl = $("#obligations");
const answersUl = $("#answers");
// ---------- Render helpers ----------
function renderQuestions(list) {
    questionsEl.innerHTML = "";
    if (!list.length) {
        questionsEl.textContent = "No questions.";
        return;
    }
    for (const q of list) {
        const box = document.createElement("div");
        box.className = "q";
        const label = document.createElement("label");
        label.textContent = q.prompt;
        let input;
        if (q.kind === "NUMBER") {
            input = document.createElement("input");
            input.type = "number";
            input.min = "0";
        }
        else if (q.kind === "BOOL") {
            input = document.createElement("input");
            input.type = "checkbox";
        }
        else {
            input = document.createElement("input");
            input.type = "text";
        }
        const btn = document.createElement("button");
        btn.textContent = "Submit";
        btn.onclick = async () => {
            try {
                btn.disabled = true;
                let value;
                if (q.kind === "NUMBER") {
                    const n = Number(input.value);
                    value = Number.isFinite(n) ? n : 0;
                }
                else if (q.kind === "BOOL") {
                    value = input.checked;
                }
                else {
                    value = input.value ?? "";
                }
                // Your POST /api/answers expects: { scope?, questionId, questionCode, answer }
                await postJSON("/api/answers", {
                    scope: "FEDERAL",
                    questionId: q.id,
                    questionCode: q.code,
                    answer: value,
                });
                // After submit, refresh answers + obligations
                await Promise.all([refreshAnswers(), refreshObligations()]);
            }
            catch (e) {
                console.error(e);
                alert("Submit failed");
            }
            finally {
                btn.disabled = false;
            }
        };
        box.appendChild(label);
        box.appendChild(input);
        box.appendChild(document.createTextNode(" "));
        box.appendChild(btn);
        questionsEl.appendChild(box);
    }
}
function renderObligations(list) {
    obligationsUl.innerHTML = "";
    if (!list.length) {
        obligationsUl.innerHTML = "<li>No obligations apply yet.</li>";
        return;
    }
    for (const o of list) {
        const li = document.createElement("li");
        li.textContent = `${o.obligationCode} (rule ${o.ruleId})`;
        obligationsUl.appendChild(li);
    }
}
function renderAnswers(list) {
    answersUl.innerHTML = "";
    if (!list.length) {
        answersUl.innerHTML = "<li>No answers yet.</li>";
        return;
    }
    for (const a of list) {
        const val = a.valueNumber ?? a.valueBool ?? a.valueText ?? a.value;
        const li = document.createElement("li");
        li.textContent = `${a.questionCode}: ${String(val)}  — #${a.id}`;
        answersUl.appendChild(li);
    }
}
// ---------- Refreshers ----------
async function refreshSession() {
    const s = await getJSON("/api/session");
    sessionEl.textContent = String(s.sessionId ?? "—");
}
async function refreshQuestions() {
    const qs = await getJSON("/api/questions?scope=FEDERAL");
    renderQuestions(qs);
}
async function refreshObligations() {
    const data = await getJSON("/api/obligations?scope=FEDERAL");
    renderObligations(data.obligations);
}
async function refreshAnswers() {
    const data = await getJSON("/api/answers");
    renderAnswers(data);
}
// ---------- Bootstrap ----------
async function init() {
    try {
        await refreshSession();
        await refreshQuestions();
        await refreshObligations();
        await refreshAnswers();
        // Buttons
        $("#refresh-session")?.addEventListener("click", refreshSession);
        $("#refresh-obls")?.addEventListener("click", refreshObligations);
        $("#refresh-answers")?.addEventListener("click", refreshAnswers);
    }
    catch (e) {
        console.error(e);
        document.body.insertAdjacentHTML("beforeend", `<p style="color:red">Init failed: ${String(e)}</p>`);
    }
}
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
}
else {
    init();
}
