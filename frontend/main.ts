// ---------- Types from your API ----------
export type AnswerResponse = {
  sessionId: string;
  facts: Record<string, unknown>;
  activeObligations: ObligationLink[];
  answered: { id: number };
};

export type ObligationLink = {
  id: number;
  sessionId: string;
  answerId: number;
  scope: string;                 // "FEDERAL" | "STATE" | "CITY" at runtime
  obligationId: number;
  obligationCode: string;
  ruleId: number | null;
  active: boolean;
  firstAppliedAt: string;
  lastEvaluatedAt: string;
  createdAt: string;
  updatedAt: string;
};

export type Question = {
  id: number;
  topicNumber: number;
  code: string;
  kind: "NUMBER" | "BOOL" | "TEXT";
  prompt: string;
  help?: string | null;
};

export type SessionResp = { sessionId: string | null };
export type ObligationsResp = { sessionId: string; active: ObligationLink[] };

// ---------- Small fetch helpers ----------
export async function postJSON<T>(url: string, body: unknown): Promise<T> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(await res.text());
  return (await res.json()) as T;
}

export async function getJSON<T>(url: string): Promise<T> {
  const res = await fetch(url, { credentials: "same-origin" });
  if (!res.ok) throw new Error(await res.text());
  return (await res.json()) as T;
}

// ---------- Bootstrap ----------
(async function init() {
  try {
    // 1) session
    const session = await getJSON<SessionResp>("/api/session");
    document.getElementById("session")!.textContent = String(session.sessionId ?? "—");

    // 2) questions
    const questions = await getJSON<Question[]>("/api/questions?scope=FEDERAL");
    const qDiv = document.getElementById("questions")!;
    questions.forEach((q) => {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = `<label>${q.prompt}</label><br/>`;

      let input: HTMLInputElement;
      switch (q.kind) {
        case "NUMBER":
          input = document.createElement("input");
          input.type = "number";
          input.min = "0";
          break;
        case "BOOL":
          input = document.createElement("input");
          input.type = "checkbox";
          break;
        default:
          input = document.createElement("input");
          input.type = "text";
      }

      const submit = document.createElement("button");
      submit.textContent = "Submit";
      submit.onclick = async () => {
        try {
          submit.disabled = true;

          let value: number | boolean | string;
          if (q.kind === "NUMBER") {
            const n = Number(input.value);
            value = Number.isFinite(n) ? n : 0;
          } else if (q.kind === "BOOL") {
            value = input.checked;
          } else {
            value = input.value ?? "";
          }

          const result = await postJSON<AnswerResponse>("/api/answers", {
            questionCode: q.code,
            answer: value,
            topicNumber: q.topicNumber,
            questionId: q.id,
          });

          renderObligations(result.activeObligations);
        } catch (err) {
          console.error(err);
          alert("Failed to submit answer.");
        } finally {
          submit.disabled = false;
        }
      };

      wrapper.appendChild(input);
      wrapper.appendChild(document.createElement("br"));
      wrapper.appendChild(submit);
      qDiv.appendChild(wrapper);
    });

    // 3) obligations
    document.getElementById("refresh")!.addEventListener("click", refreshObligationsUI);
    await refreshObligationsUI();
  } catch (e) {
    console.error(e);
    document.body.insertAdjacentHTML("beforeend", `<p style="color:red">Init failed: ${String(e)}</p>`);
  }
})();

// ---------- Rendering ----------
async function refreshObligationsUI() {
  try {
    const data = await getJSON<ObligationsResp>("/api/obligations");
    renderObligations(data.active);
  } catch (e) {
    console.error(e);
  }
}

function renderObligations(list: ObligationLink[]) {
  const ul = document.getElementById("obligations")!;
  ul.innerHTML = "";
  if (!list.length) {
    ul.innerHTML = "<li>No active obligations.</li>";
    return;
  }
  for (const o of list) {
    const li = document.createElement("li");
    li.textContent = `${o.obligationCode} (rule ${o.ruleId ?? "—"}, from answer ${o.answerId})`;
    ul.appendChild(li);
  }
}