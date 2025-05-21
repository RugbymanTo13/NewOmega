
import React, { useState } from "react";

const Dashboard = () => (
  <div style={{ padding: 40, background: "#f4f4f4", fontFamily: "Arial" }}>
    <h1>🔐 Omega∞ Dashboard</h1>
    <h2>✅ Connexion réussie</h2>
    <div style={{ marginTop: 20 }}>
      <h3>📈 Signaux IA</h3>
      <ul>
        <li><strong>BTC/USD</strong> : Buy (confiance 87%)</li>
        <li><strong>OR (XAU/USD)</strong> : Hold (confiance 72%)</li>
        <li><strong>ETH/USD</strong> : Sell (confiance 64%)</li>
      </ul>
    </div>
    <div style={{ marginTop: 30 }}>
      <h3>🧠 Mémoire stratégique</h3>
      <p>L’IA anticipe une pression haussière sur l’or. BTC reste fort.</p>
    </div>
  </div>
);

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    if (user === "omega_user_qf3v" && pass === "wF2@3uV!6dPxY9#A") {
      setLoggedIn(true);
    } else {
      alert("Identifiants invalides.");
    }
  };

  if (loggedIn) return <Dashboard />;
  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Connexion à Omega∞</h1>
      <input placeholder="Identifiant" onChange={(e) => setUser(e.target.value)} /><br /><br />
      <input placeholder="Mot de passe" type="password" onChange={(e) => setPass(e.target.value)} /><br /><br />
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  );
}

export default App;
