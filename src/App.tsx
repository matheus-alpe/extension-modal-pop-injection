import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { emitMessage, set, get } from "./utils";

const fetchStorage = async (callback: Function) => {
  const response = await get("count");
  callback(response.count);
};

function App() {
  const [count, setCount] = useState(0);

  async function handleCounterClick() {
    setCount((count) => {
      const result = count + 1;
      set("count", result);
      return result;
    });
  }

  useEffect(() => {
    fetchStorage(setCount);
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 onClick={() => emitMessage("close-modal")}>
        Click here to close modal!
      </h1>
      <div className="card">
        <button onClick={handleCounterClick}>count is {count}</button>
      </div>
    </div>
  );
}

export default App;
