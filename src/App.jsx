import React, { useState } from 'react';
import Vue from './components/Vue.jsx';
import Signaux from './components/Signaux.jsx';
import Journal from './components/Journal.jsx';
import Console from './components/Console.jsx';
import Agents from './components/Agents.jsx';
import Planification from './components/Planification.jsx';
import Charte from './components/Charte.jsx';

export default function App() {
  const [onglet, setOnglet] = useState("Vue");
  const composants = { Vue, Signaux, Journal, Console, Agents, Planification, Charte };
  const OngletActif = composants[onglet];
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Omega∞ Cockpit</h1>
      <nav style={{ marginBottom: '1rem' }}>
        {Object.keys(composants).map(name => (
          <button key={name} onClick={() => setOnglet(name)} style={{ marginRight: '1rem' }}>
            {name}
          </button>
        ))}
      </nav>
      <section><OngletActif /></section>
    </div>
  );
}
