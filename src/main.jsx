import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Nav from "./components/nav.jsx";
import About from "./pages/about.jsx";
import Programs from "./pages/programs.jsx";
import FabClass from "./pages/fabClass.jsx";
import OurServices from "./pages/ourServices.jsx";
import Events from "./pages/events.jsx";
import GetQuote from "./pages/getQuote.jsx";
const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="fabClass" element={<FabClass />} />
          <Route path="ourServices" element={<OurServices />} />
          <Route path="events" element={<Events />} />
          <Route path="getQuote" element={<GetQuote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
