import React from 'react';

const Onglets = () => {
  const onglets = [
    "Vue d’ensemble",
    "Signaux IA",
    "Journal stratégique",
    "Console IA",
    "Agents IA",
    "Planification IA",
    "Charte IA"
  ];

  return (
    <div>
      <h2>Onglets actifs</h2>
      <ul>
        {onglets.map((onglet, i) => <li key={i}>{onglet}</li>)}
      </ul>
      <p>Tous les modules sont intégrés avec l’IA Omega∞.</p>
    </div>
  );
};

export default Onglets;
