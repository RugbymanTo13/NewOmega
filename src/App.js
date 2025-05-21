
import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: 'BTC', signal: 87 },
  { name: 'OR', signal: 72 },
  { name: 'ETH', signal: 64 },
];

const Journal = () => (
  <div style={{ marginTop: 30 }}>
    <h3>🧠 Mémoire stratégique</h3>
    <div style={{ background: '#222', padding: 16, borderRadius: 8, maxHeight: 150, overflowY: 'auto' }}>
      <p>• L’IA anticipe une hausse du BTC avec forte confiance.</p>
      <p>• L’or reste stable, signal neutre en cours d’observation.</p>
      <p>• ETH montre des signes de retournement.</p>
    </div>
  </div>
);

const SignalChart = () => (
  <ResponsiveContainer width="100%" height={250}>
    <BarChart data={data}>
      <XAxis dataKey="name" stroke="#fff" />
      <YAxis stroke="#fff" />
      <Tooltip />
      <Bar dataKey="signal" fill="#00cc99" />
    </BarChart>
  </ResponsiveContainer>
);

const Dashboard = () => (
  <div style={{ padding: 40, fontFamily: "Arial", background: "#111", color: "#fff" }}>
    <h1>🚀 Omega∞ Dashboard</h1>
    <h2 style={{ marginTop: 20 }}>📊 Signaux IA</h2>
    <SignalChart />
    <Journal />
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
    <div style={{ padding: 40, fontFamily: "Arial", background: "#111", color: "#fff", height: "100vh" }}>
      <h1>🔐 Connexion à Omega∞</h1>
      <input style={{ padding: 8, marginBottom: 12, width: 200 }} placeholder="Identifiant" onChange={(e) => setUser(e.target.value)} /><br />
      <input style={{ padding: 8, marginBottom: 12, width: 200 }} type="password" placeholder="Mot de passe" onChange={(e) => setPass(e.target.value)} /><br />
      <button style={{ padding: 10, background: "#00cc99", border: "none", color: "#fff", cursor: "pointer" }} onClick={handleLogin}>Se connecter</button>
    </div>
  );
}

export default App;
