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
import HostVans from "./Page/Host/HostVans.jsx";
import HostVanDetail from "./Page/Host/HostVanDetail.jsx";
import HostVanDetailPhoto from "./Page/Host/Details/HostVanDetailPhoto.jsx";
import HostVanDetailInfo from "./Page/Host/Details/HostVanDetailInfo.jsx";
import HostVanDetailPrice from "./Page/Host/Details/HostVanDetailPrice.jsx";
import NotFound from "./Page/NotFound.jsx";
import Login from "./Page/Login.jsx";
import AuthRequired from "./Components/AuthRequired.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />
            <Route path="login" element={<Login />} />
            <Route path="about" element={<About />} />

            <Route element={<AuthRequired />}>
              {/* authentication of host pages */}
              <Route path="host" element={<HostLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="income" element={<Income />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="vans" element={<HostVans />} />

                <Route path="vans/:id" element={<HostVanDetail />}>
                  <Route index element={<HostVanDetailInfo />} />
                  <Route path="photos" element={<HostVanDetailPhoto />} />
                  <Route path="pricing" element={<HostVanDetailPrice />} />
                </Route>
              </Route>

              <Route path="*" element={<NotFound />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
