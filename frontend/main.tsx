import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  Card,
  Row,
  Button,
  TextInput,
  Select,
  NumberAnswer,
  BoolAnswer,
  TextAnswer,
  Badge,
  SectionTint,
} from "./interfaceElements";

/* ---------- Types that match your API ---------- */
type Scope = "FEDERAL" | "STATE" | "CITY";

const CITY_OPTIONS = ["New York", "Boston", "Portland"];

type QuestionDTO = {
  id: number;
  code: string;
  kind: "NUMBER" | "BOOL" | "TEXT";
  prompt: string;
};
type QuestionsResponse = QuestionDTO[];

type AnswersRow = {
  id: number;
  sessionId: string;
  scope: Scope;
  questionId: number;
  questionCode: string;
  value: unknown;
  valueNumber: number | null;
  valueBool: boolean | null;
  valueText: string | null;
  createdAt: string;
  updatedAt: string;
};
type AnswersResponse = AnswersRow[];

type ComputedObligation = {
  obligationId: number;
  obligationCode: string;
  ruleId: number;
};
type ObligationsResponse = {
  sessionId: string;
  obligations: ComputedObligation[];
};

type SessionResp = { sessionId: string | null };

type ObligationMeta = {
  code: string;
  title: string;
  description?: string | null;
  citation?: string | null;
};

/* ---------- fetch helpers ---------- */
async function postJSON<T>(url: string, body?: unknown): Promise<T> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) throw new Error(await res.text());
  return (await res.json()) as T;
}
async function getJSON<T>(url: string): Promise<T> {
  const res = await fetch(url, { credentials: "same-origin" });
  if (!res.ok) throw new Error(await res.text());
  return (await res.json()) as T;
}

/* ---------- helpers ---------- */
function computeProgress(qs: QuestionDTO[], ans: AnswersRow[]) {
  // Only consider answers by question code present in the current question list
  const codesInScope = new Set(qs.map((q) => q.code));
  const answeredCodes = new Set(
    ans.filter((a) => codesInScope.has(a.questionCode)).map((a) => a.questionCode)
  );
  const firstGap = qs.findIndex((q) => !answeredCodes.has(q.code));
  return { firstGap, completed: qs.length > 0 && firstGap === -1 };
}

/* ---------- Component ---------- */
function App() {
  const [sessionId, setSessionId] = React.useState("…");

  // Scope + location
  const [activeScope, setActiveScope] = React.useState<Scope>("FEDERAL");
  const [stateCode, setStateCode] = React.useState<string>(""); // e.g., "NY"
  const [cityName, setCityName] = React.useState<string>(""); // e.g., "New York"

  // Data per active context
  const [questions, setQuestions] = React.useState<QuestionDTO[]>([]);
  const [answers, setAnswers] = React.useState<AnswersRow[]>([]);
  const [obligations, setObligations] = React.useState<ComputedObligation[]>([]);
  const [idx, setIdx] = React.useState(0);
  const [submitting, setSubmitting] = React.useState(false);

  // Meta (federal upfront; state/city lazy)
  const [metaFederal, setMetaFederal] = React.useState<Map<string, ObligationMeta>>(new Map());
  const [metaState, setMetaState] = React.useState<Map<string, ObligationMeta>>(new Map());
  const [metaCity, setMetaCity] = React.useState<Map<string, ObligationMeta>>(new Map());

  // Bootstrap: session + federal meta + initial federal data
  React.useEffect(() => {
    (async () => {
      const s = await getJSON<SessionResp>("/api/session");
      setSessionId(String(s.sessionId ?? "—"));

      try {
        const m = await getJSON<ObligationMeta[]>("/api/obligation-meta?scope=FEDERAL");
        setMetaFederal(new Map(m.map((x) => [x.code, x])));
      } catch {
        setMetaFederal(new Map());
      }

      await loadContext("FEDERAL");
    })().catch(console.error);
  }, []);

  // Build query string for current context
  function contextQS(scope: Scope) {
    if (scope === "STATE") return stateCode ? `&location=${encodeURIComponent(stateCode)}` : "";
    if (scope === "CITY") return cityName ? `&location=${encodeURIComponent(cityName)}` : "";
    return "";
  }

  // Load the current context’s data. Returns the loaded arrays for reliable index/complete updates.
  async function loadContext(scope: Scope) {
    const locParam = contextQS(scope);

    // If location is required but missing, clear the view for this scope
    if ((scope === "STATE" && !stateCode) || (scope === "CITY" && !cityName)) {
      setQuestions([]);
      setObligations([]);
      return { qs: [] as QuestionDTO[], ans: answers, obls: [] as ComputedObligation[] };
    }

    const [qs, ans, obls] = await Promise.all([
      getJSON<QuestionsResponse>(`/api/questions?scope=${scope}${locParam}`),
      getJSON<AnswersResponse>("/api/answers"),
      getJSON<ObligationsResponse>(`/api/obligations?scope=${scope}${locParam}`),
    ]);

    setQuestions(qs);
    setAnswers(ans);
    setObligations(obls.obligations);
    return { qs, ans, obls: obls.obligations };
  }

  // On scope change, load only if ready (STATE/CITY waits for location)
  React.useEffect(() => {
    setIdx(0); // reset cursor when switching scope tabs
    loadContext(activeScope).catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeScope]);

  // When state selection changes (and tab is STATE), fetch meta & context
  React.useEffect(() => {
    if (activeScope !== "STATE") return;
    if (!stateCode) {
      setQuestions([]);
      setObligations([]);
      setIdx(0);
      return;
    }
    (async () => {
      try {
        const m = await getJSON<ObligationMeta[]>(
          `/api/obligation-meta?scope=STATE&location=${encodeURIComponent(stateCode)}`
        );
        setMetaState(new Map(m.map((x) => [x.code, x])));
      } catch {
        setMetaState(new Map());
      }
      await loadContext("STATE");
    })().catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateCode]);

  // When city selection changes (and tab is CITY), fetch meta & context
  React.useEffect(() => {
    if (activeScope !== "CITY") return;
    if (!cityName) {
      setQuestions([]);
      setObligations([]);
      setIdx(0);
      return;
    }
    (async () => {
      try {
        const m = await getJSON<ObligationMeta[]>(
          `/api/obligation-meta?scope=CITY&location=${encodeURIComponent(cityName)}`
        );
        setMetaCity(new Map(m.map((x) => [x.code, x])));
      } catch {
        setMetaCity(new Map());
      }
      await loadContext("CITY");
    })().catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityName]);

  // Prefill map from all session answers (we’ll pick by questionCode)
  const prevByCode = React.useMemo(() => {
    const m = new Map<string, AnswersRow>();
    for (const a of answers) m.set(a.questionCode, a);
    return m;
  }, [answers]);

  const current = questions[idx] ?? null;
  const { completed } = computeProgress(questions, answers);

  // Submit handler — uses fresh data returned by loadContext to avoid stale closures
  async function submitAnswer(value: number | boolean | string) {
    if (!current) return;
    try {
      setSubmitting(true);
      await postJSON<{ ok: true; id: number }>("/api/answers", {
        scope: activeScope,
        questionId: current.id,
        questionCode: current.code,
        answer: value,
      });

      const { qs, ans } = await loadContext(activeScope);
      const prog = computeProgress(qs, ans);

      if (prog.completed) {
        // Jump to last question (for review), hide nav via `completed` banner
        setIdx(Math.max(qs.length - 1, 0));
      } else {
        // Go to the next missing question
        setIdx(Math.max(prog.firstGap, 0));
      }
    } catch (e) {
      console.error(e);
      alert("Submit failed");
    } finally {
      setSubmitting(false);
    }
  }

  // Render correct input for current question
  function CurrentQuestionInput() {
    // If location is required and missing, show helper text
    if ((activeScope === "STATE" && !stateCode) || (activeScope === "CITY" && !cityName)) {
      return (
        <div style={{ color: "#555" }}>
          Choose a {activeScope === "STATE" ? "state" : "city"} to load questions.
        </div>
      );
    }
    // Completed: show banner, no inputs
    if (!current && completed) {
      return (
        <div style={{ color: "#2e7", fontWeight: 600 }}>
          All questions answered for this scope 🎉 — You can switch tabs or start a new session.
        </div>
      );
    }
    // No questions at all (rare)
    if (!current) {
      return <div style={{ color: "#666" }}>No questions available.</div>;
    }

    const prev = prevByCode.get(current.code);
    if (current.kind === "NUMBER") {
      return (
        <NumberAnswer
          initial={prev?.valueNumber}
          disabled={submitting}
          onSubmit={(v) => submitAnswer(v)}
        />
      );
    }
    if (current.kind === "BOOL") {
      return (
        <BoolAnswer
          initial={prev?.valueBool}
          disabled={submitting}
          onSubmit={(v) => submitAnswer(v)}
        />
      );
    }
    return (
      <TextAnswer
        initial={prev?.valueText ?? ""}
        disabled={submitting}
        onSubmit={(v) => submitAnswer(v)}
      />
    );
  }

  // Meta lookup per active scope
  function metaFor(code: string): ObligationMeta | undefined {
    if (activeScope === "FEDERAL") return metaFederal.get(code);
    if (activeScope === "STATE") return metaState.get(code);
    return metaCity.get(code);
  }

  function ObligationItem({ ob }: { ob: ComputedObligation }) {
    const meta = metaFor(ob.obligationCode);
    const title = meta?.title ?? ob.obligationCode;
    const desc = meta?.description ?? "";
    const href =
      meta?.citation && /^https?:\/\//i.test(meta.citation)
        ? meta.citation
        : `/obligations/${encodeURIComponent(ob.obligationCode)}`;

    return (
      <div
        style={{
          border: "1px solid #e6e6ef",
          borderRadius: 12,
          padding: 14,
          background: "#fafaff",
        }}
      >
        <Row align="baseline">
          <div style={{ fontWeight: 700, fontSize: 15 }}>{title}</div>
          <span style={{ color: "#777", fontSize: 12 }}>(rule {ob.ruleId})</span>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: "auto", fontSize: 12, textDecoration: "underline" }}
          >
            Learn more →
          </a>
        </Row>
        {desc ? (
          <div style={{ color: "#444", marginTop: 6, lineHeight: 1.35 }}>{desc}</div>
        ) : null}
      </div>
    );
  }

  const canBack = !completed && idx > 0;
  const canNext = !completed && idx < Math.max(questions.length - 1, 0);

  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 20, background: "#f7f7fb", minHeight: "100vh" }}>
      {/* Header / Session */}
      <Card title="Session" right={<Badge>{activeScope}</Badge>}>
        <Row>
          <div style={{ color: "#555" }}>id:</div>
          <code>{sessionId}</code>
          <div style={{ marginLeft: "auto", color: "#555" }}>
            {questions.length ? `${Math.min(idx + 1, questions.length)} / ${questions.length}` : "0 / 0"}
          </div>
          <Button
            variant="ghost"
            onClick={async () => {
              await postJSON<{ sessionId: string }>("/api/session/new");
              window.location.reload();
            }}
            title="Start a brand new session (wipes answers)"
          >
            Start new session
          </Button>
        </Row>
      </Card>

      {/* Scope Controls */}
      <Card title="Scope">
        <Row wrap>
          <Button
            variant={activeScope === "FEDERAL" ? "primary" : "secondary"}
            onClick={() => setActiveScope("FEDERAL")}
          >
            Federal
          </Button>
          <Button
            variant={activeScope === "STATE" ? "primary" : "secondary"}
            onClick={() => setActiveScope("STATE")}
          >
            State
          </Button>
          <Button
            variant={activeScope === "CITY" ? "primary" : "secondary"}
            onClick={() => setActiveScope("CITY")}
          >
            City
          </Button>

          {/* State picker */}
          {activeScope === "STATE" && (
            <Select
              width={180}
              value={stateCode}
              onChange={(e) => setStateCode(e.currentTarget.value)}
              style={{ marginLeft: 12 }}
            >
              <option value="" disabled hidden>
                Choose state
              </option>
              <option value="CA">California</option>
              <option value="NY">New York</option>
              <option value="TX">Texas</option>
              <option value="FL">Florida</option>
              <option value="IL">Illinois</option>
            </Select>
          )}

          {/* City picker */}
          {activeScope === "CITY" && (
            <Select
              width={180}
              value={cityName}
              onChange={(e) => setCityName(e.currentTarget.value)}
              style={{ marginLeft: 12 }}
            >
              <option value="" disabled hidden>
                Choose city
              </option>
              {CITY_OPTIONS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </Select>
          )}
        </Row>
      </Card>

      {/* Question + Obligations panel */}
      <Card title="Question">
        {current ? (
          <div style={{ fontWeight: 700, marginBottom: 6 }}>
            {current.prompt}
            <span style={{ marginLeft: 8, color: "#777", fontWeight: 400 }}>
              (QID: {current.id})
            </span>
          </div>
        ) : (
          <>
            {(activeScope === "STATE" && !stateCode) || (activeScope === "CITY" && !cityName) ? (
              <div style={{ color: "#555", marginBottom: 8 }}>
                Choose a {activeScope === "STATE" ? "state" : "city"} to load questions.
              </div>
            ) : (
              <div style={{ marginBottom: 8, color: "#2e7", fontWeight: 600 }}>
                All questions answered for this scope 🎉 — You can switch tabs or start a new session.
              </div>
            )}
          </>
        )}

        <div style={{ marginBottom: 12 }}>
          <CurrentQuestionInput />
        </div>

        {/* Nav (hidden once scope is completed) */}
        {!completed && current && (
          <Row gap={8} style={{ marginBottom: 12 }}>
            <Button
              variant="secondary"
              onClick={() => canBack && setIdx((i) => Math.max(0, i - 1))}
              disabled={!canBack}
            >
              Back
            </Button>
            <Button
              variant="secondary"
              onClick={() => canNext && setIdx((i) => Math.min(questions.length - 1, idx + 1))}
              disabled={!canNext}
            >
              Next
            </Button>
          </Row>
        )}

        {/* Obligations panel (tinted by active scope) */}
        <div>
          <div style={{ fontWeight: 600, marginBottom: 8 }}>Obligations (computed)</div>
          <SectionTint
            tone={activeScope === "FEDERAL" ? "federal" : activeScope === "STATE" ? "state" : "city"}
          >
            <div style={{ maxHeight: 280, overflow: "auto", display: "grid", gap: 10 }}>
              {!obligations.length ? (
                <div style={{ color: "#666" }}>No obligations apply yet.</div>
              ) : (
                obligations.map((o) => (
                  <ObligationItem key={`${o.obligationId}-${o.ruleId}`} ob={o} />
                ))
              )}
            </div>
          </SectionTint>
        </div>
      </Card>
    </div>
  );
}

/* ---------- mount ---------- */
const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);