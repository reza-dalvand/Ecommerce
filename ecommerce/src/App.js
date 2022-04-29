import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./layouts/Home";
import Products from "./layouts/Products";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
