import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Nav/Nav';
import Homepage from './components/Homepage/Homepage';
import About from './components/About/About';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route className="navbar-link" path="/" element={<Homepage />} />
        <Route className="navbar-link" path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;