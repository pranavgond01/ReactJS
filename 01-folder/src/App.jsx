

import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);
  return (
    <main>
      <h1>React Counter</h1>

      <h2>count: {count}</h2>

      
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>



    </main>
  );
}

export default App;