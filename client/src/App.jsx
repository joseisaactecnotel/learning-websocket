import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <section>
      <h1>{count}</h1>
      <button onClick={}>+</button>
      <button onClick={}>-</button>
    </section>
  );
};

export default App;
