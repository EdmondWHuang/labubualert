import { useState } from "react";
import { Analytics } from '@vercel/analytics/react';
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Are you ready to get your labubu?</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Analytics />
    </>
  );
}

export default App;
