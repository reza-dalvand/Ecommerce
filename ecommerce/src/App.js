import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./layouts/Home";
import Blog from "./layouts/Blog";
import Products from "./layouts/Products";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/products" element={<Products />} />
      </Routes>
      <Routes>
        <Route exact path="/Blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
