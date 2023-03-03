import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React 17</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <ul>
            <li>
              <a href="/strictMode" className="App-link">
                Strict Mode
              </a>
            </li>
            <li>
              <a href="/batching/async" className="App-link">
                Automatic batching in async HTTP request
              </a>
            </li>
            <li>
              <a href="/batching/timer" className="App-link">
                Automatic batching in timer
              </a>
            </li>
            <li>
              <a href="/batching/eventListener" className="App-link">
                Automatic batching in event listener
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
