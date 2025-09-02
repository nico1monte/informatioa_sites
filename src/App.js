import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This project is by <code><a href="github.com/nico1monte"></a></code> Click this link to start the page.
        </p>
        <a
          className="App-link"
          href="./home.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start
        </a>
      </header>
    </div>
  );
}

export default App;
