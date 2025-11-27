'use client';

import { useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  async function loadData() {
    const res = await fetch('/api/crapi');
    const json = await res.json();
    setData(json);
  }

  return (
    <div style={{ padding: 30 }}>
      <h1>CRAPI Proxy Test</h1>
      <button onClick={loadData}>Load Data</button>

      <pre style={{ marginTop: 20 }}>
        {data ? JSON.stringify(data, null, 2) : 'No data loaded'}
      </pre>
    </div>
  );
}
