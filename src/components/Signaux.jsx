import React, { useEffect, useState } from 'react';
export default function Signaux() {
  const [btc, setBtc] = useState(); const [or, setOr] = useState(); const [eth, setEth] = useState();
  useEffect(() => {
    fetch('/api/btc').then(res => res.json()).then(setBtc);
    fetch('/api/or').then(res => res.json()).then(setOr);
    fetch('/api/eth').then(res => res.json()).then(setEth);
  }, []);
  return (
    <div>
      <h2>Signaux IA</h2>
      <p>BTC : {btc ? JSON.stringify(btc) : "Chargement..."}</p>
      <p>OR : {or ? JSON.stringify(or) : "Chargement..."}</p>
      <p>ETH : {eth ? JSON.stringify(eth) : "Chargement..."}</p>
    </div>
  );
}