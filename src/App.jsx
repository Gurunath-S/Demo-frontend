import React, {useEffect, useState} from 'react';

export default function App(){
  const [msg, setMsg] = useState('loading...');
  useEffect(() => {
    // Change this to your deployed backend URL in production
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
    fetch(`${BACKEND_URL}/hello`)
      .then(r => r.json())
      .then(d => setMsg(d.msg))
      .catch(e => setMsg('backend unreachable'));
  }, []);

  return (
    <div style={{fontFamily:'sans-serif', padding:20}}>
      <h1>Frontend says: Hello 👋</h1>
      <p>Backend response: <strong>{msg}</strong></p>
    </div>
  );
}
