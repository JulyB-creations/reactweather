import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's Start!</h1>
        <Weather city="Paris" />
      </header>
    </div>
  );
}

export default App;
