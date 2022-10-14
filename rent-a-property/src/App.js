
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from './components/Header';
import Home from './components/Home';
import Favourite from './components/Favourite';
// import Card from './components/Card';
// import Card from './components/Card';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/favourite" element={<Favourite />} />
        </Routes>

        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
