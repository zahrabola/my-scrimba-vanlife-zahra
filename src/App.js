import "./App.css";
import "./server.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home.jsx";
import Vans from "./Page/Vans/Vans.jsx";
import About from "./Page/About.jsx";
import VanDetail from "./Page/Vans/VanDetail.jsx";
import Layout from "./Components/layout.jsx";
import Dashboard from "./Page/Host/Dashboard.jsx";
import Income from "./Page/Host/Income.jsx";
import Reviews from "./Page/Host/Reviews.jsx";
import HostLayout from "./Components/HostLayout.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />
            <Route path="about" element={<About />} />
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
