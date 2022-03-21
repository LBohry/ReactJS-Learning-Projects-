//import "./App.css";
//import { useState } from "react";
//
//const App = () => {
//  const [count, setCount] = useState(0);
//
//  return (
//    <div className="App">
//      <header className="App-header">
//        <label htmlFor="input">WRITE HERE</label>
//        <input type="text" value={count} size="35" id="input" />
//        <div class="buttons">
//          <button value="+" className="b" onClick={() => setCount(count + 1)}>
//            +
//          </button>
//          <button value="-" className="b" onClick={() => setCount(count - 1)}>
//            -
//          </button>
//          {console.log({ count })}
//        </div>
//      </header>
//    </div>
//  );
//};
//export default App;

import React from "react";
import "./App.css";
import App2 from "./App2";

const App = () => <App2 />;

export default App;
