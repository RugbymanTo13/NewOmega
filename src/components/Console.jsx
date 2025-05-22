import React, { useState } from 'react';
export default function Console() {
  const [prompt, setPrompt] = useState(""); const [response, setResponse] = useState(null);
  const envoyer = async () => {
    const res = await fetch('/api/command', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    }); setResponse(await res.json());
  };
  return (
    <div>
      <h2>Console IA</h2>
      <input value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Commande IA…" />
      <button onClick={envoyer}>Envoyer</button>
      <pre>{response ? JSON.stringify(response, null, 2) : "En attente…"}</pre>
    </div>
  );
}