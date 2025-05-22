import React, { useState } from 'react';
export default function Console() {
  const [input, setInput] = useState(""); const [response, setResponse] = useState(null);
  const envoyer = async () => {
    const res = await fetch('/api/command', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: input })
    }); setResponse(await res.json());
  };
  return (
    <div>
      <h2>Console IA</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Demande à l'IA" />
      <button onClick={envoyer}>Envoyer</button>
      <pre>{response ? JSON.stringify(response, null, 2) : "En attente..."}</pre>
    </div>
  );
}