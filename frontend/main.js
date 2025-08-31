const API = "/api"; // same-origin; if different origin later, set full URL

const opts = (init = {}) => ({
  credentials: "include",                      // send/receive the sid cookie
  headers: { "Content-Type": "application/json" },
  ...init,
});

async function startSession() {
  const res = await fetch(`${API}/session`, opts());
  if (!res.ok) throw new Error("Failed to start session");
  const { sessionId } = await res.json();
  return sessionId;
}

(async () => {
  const el = document.querySelector("#session");
  try {
    const sid = await startSession();          // ensureSession runs on server
    el.textContent = sid || "(none)";
  } catch (e) {
    console.error(e);
    el.textContent = "Error creating session";
  }
})();