
import React, { useState } from "react";

const agentsStatus = [
  { name: "Sniper IA", status: "🟢 Actif" },
  { name: "Mémoire IA", status: "🟢 Connectée" },
  { name: "Analyse BTC", status: "🟢 Prête" },
  { name: "Macro IA", status: "🟡 En attente" },
];

const dashboardStyle = {
  background: "#000",
  color: "#00ffcc",
  fontFamily: "monospace",
  padding: "2rem",
  height: "100vh",
};

function App() {
  const [command, setCommand] = useState("");
  const [logs, setLogs] = useState([
    "🧠 Mémoire IA synchronisée.",
    "📡 Dernière alerte : BUY BTC (87%)",
    "🔎 Observation en cours : OR latéral, ETH en baisse.",
  ]);

  const handleCommand = () => {
    if (command.trim()) {
      setLogs([...logs, `> ${command}`, "✅ IA : Commande reçue. Traitement en cours..."]);
      setCommand("");
    }
  };

  return (
    <div style={dashboardStyle}>
      <h1>🧠 Omega∞ - Panneau de Contrôle</h1>
      <section>
        <h2>📊 État des Agents IA</h2>
        <ul>
          {agentsStatus.map((agent, idx) => (
            <li key={idx}>{agent.name} — <strong>{agent.status}</strong></li>
          ))}
        </ul>
      </section>
      <section style={{ marginTop: "2rem" }}>
        <h2>📜 Journal IA</h2>
        <div style={{ background: "#111", padding: "1rem", borderRadius: "8px", maxHeight: 200, overflowY: "auto" }}>
          {logs.map((log, idx) => (
            <p key={idx} style={{ margin: 0 }}>{log}</p>
          ))}
        </div>
      </section>
      <section style={{ marginTop: "2rem" }}>
        <h2>⌨️ Console IA</h2>
        <input
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder="Entrer une commande IA…"
          style={{ padding: 10, width: "80%", background: "#111", color: "#0f0", border: "1px solid #0f0" }}
        />
        <button onClick={handleCommand} style={{ marginLeft: 10, padding: 10, background: "#0f0", color: "#000", border: "none" }}>
          Envoyer
        </button>
      </section>
    </div>
  );
}

export default App;
