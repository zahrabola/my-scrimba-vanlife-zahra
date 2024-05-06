
import './App.css';
 import "./server.js"
  import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './Page/Header.jsx';
import Home from './Page/Home.jsx';
import Vans from './Page/Vans.jsx';
import About from './Page/About.jsx';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
 
    <Header />
   

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
