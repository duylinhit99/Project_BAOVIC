import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//import components
import Index from "./pages/login/Index.jsx";
import Home from "./pages/home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <App>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/login" element={<Index />}></Route>
        </Routes>
      </App>
    </Router>
  </StrictMode>
);
