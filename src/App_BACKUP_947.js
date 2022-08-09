import React from "react";
import FileUpload from "./components/FileUpload";
import "./App.css";

<<<<<<< HEAD
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
=======
const App = () => (
  <div className="container mt-4">
    <h4 className="display-4 text-center mb-4">
      <i className="fab fa-react" /> Resume Parser
    </h4>
    <FileUpload />
  </div>
);
>>>>>>> 7c9d6d39b3db28df060888444da6afe031773001

export default App;
