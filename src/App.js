
import React, { useState } from "react";

const agents = [
  { nom: "IA Sniper", statut: "✅ Actif" },
  { nom: "IA Macro", statut: "⏸️ En veille" },
  { nom: "IA Mémoire", statut: "✅ Actif" },
  { nom: "IA Visualisation", statut: "🔄 En cours" },
];

const App = () => {
  const [commande, setCommande] = useState("");
  const [journal, setJournal] = useState([
    "[08:00] 🧠 Mémoire : Analyse de la tendance haussière de l’or",
    "[08:03] 🎯 Sniper : Signal ACHAT BTC (87%) déclenché",
    "[08:04] 🧭 Macro : État neutre sur EUR/USD",
    "[08:05] 🧠 Visualisation : Génération de synthèse en cours...",
  ]);

  const envoyerCommande = () => {
    if (commande.trim()) {
      const entree = `[manuel] > ${commande}`;
      setJournal([...journal, entree, `[IA] Exécution simulée de : ${commande}`]);
      setCommande("");
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: "monospace", background: "#0c0c0c", color: "#00ffcc", minHeight: "100vh" }}>
      <h1>🧠 Omega∞ — Centre de Commande IA</h1>

      <section style={{ marginTop: 30 }}>
        <h2>🔌 Statut des agents IA</h2>
        <ul>
          {agents.map((a, i) => (
            <li key={i}>• {a.nom} : {a.statut}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: 30 }}>
        <h2>📡 Journal Stratégique IA</h2>
        <div style={{ background: "#111", padding: 10, borderRadius: 6, maxHeight: 200, overflowY: "auto" }}>
          {journal.map((entree, idx) => (
            <div key={idx}>{entree}</div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 30 }}>
        <h2>⌨️ Console de Commande IA</h2>
        <input
          type="text"
          value={commande}
          onChange={(e) => setCommande(e.target.value)}
          placeholder="ex : recalcul BTC"
          style={{ width: "100%", padding: 12, background: "#111", color: "#fff", border: "1px solid #00ffcc" }}
        />
        <button
          onClick={envoyerCommande}
          style={{ marginTop: 10, padding: 12, background: "#00ffcc", border: "none", color: "#000", fontWeight: "bold", width: "100%" }}
        >
          ➤ Envoyer à l’IA Omega∞
        </button>
      </section>
    </div>
  );
};

export default App;
