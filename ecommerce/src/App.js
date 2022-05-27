import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./layouts/Home";
import Blog from "./layouts/Blog";
import SingleProduct from "./layouts/SingleProduct";
import Products from "./layouts/Products";
import SingleBlog from "./layouts/SingleBlog";
import ContactUs from "./layouts/ContactUs";
import LoginAndRegister from "./layouts/Login/Register";
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
        <Route exact path="/products/:id" element={<SingleProduct />} />
      </Routes>
      <Routes>
        <Route exact path="/Blogs" element={<Blog />} />
      </Routes>
      <Routes>
        <Route exact path="/blogs/:id" element={<SingleBlog />} />
      </Routes>
      <Routes>
        <Route exact path="/contact" element={<ContactUs />} />
      </Routes>
      <Routes>
        <Route exact path="/login" element={<LoginAndRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
