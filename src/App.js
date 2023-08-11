import './App.css';
import TypingText from './components/TypingText';

function App() {
  const textToType = "DevWinner.";


  return (
    <div className="App">
      <header className="App-header">
        <TypingText text={textToType} />
        <p>
          Portfolio under development <br /> Coming soon...
        </p>
        <a
          className="App-link"
          href="https://github.com/DevaWinner"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect with me on Github
        </a>
      </header>
    </div>
  );
}

export default App;
