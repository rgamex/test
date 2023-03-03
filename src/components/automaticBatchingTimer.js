import React, { useState } from "react";
import logo from "../logo.svg";
import "../App.css";

const BatchingTimer = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({});

  function handleClick() {
    setTimeout(() => {
      setLoading(true); // 😱 Re-render the component
      setData({}); // 😱 Re-render the component
    }, 500);
  }

  console.log("render react 17");
  return (
    <header className="App-header-test-page">
      <h1>React 17</h1>
      <div className="container-test">Automatic Batching Timer</div>
      <img src={logo} className="App-logo-test-page" alt="logo" />
      <div>
        <a href="/" className="App-link">
          Home
        </a>
      </div>
      <div className="container-test">
        <button onClick={handleClick}>Click me!</button>
      </div>
    </header>
  );
};

export default BatchingTimer;
