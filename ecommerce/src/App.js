import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./layouts/Home";
import Blog from "./layouts/Blog";
import SingleProduct from "./layouts/SingleProduct";
import Products from "./layouts/Products";
import SingleBlog from "./layouts/SingleBlog";
import ContactUs from "./layouts/ContactUs";
import LoginAndRegister from "./layouts/Login/Register";
import AboutUs from "./layouts/AboutUS";
import Cart from "./layouts/Cart";
import NotFound from "./layouts/NotFound";
import CheckOut from "./layouts/CheckOut";
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
      <Routes>
        <Route exact path="/about" element={<AboutUs />} />
      </Routes>
      <Routes>
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      <Routes>
        <Route exact path="/check" element={<CheckOut />} />
      </Routes>
      <Routes>
        <Route exact path="/not" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
