import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//import components
import Index from "./pages/login/Index.jsx";
import Home from "./pages/home.jsx";
import Blog from "./components/blog/Blog.jsx";
import BlogDetail from "./components/blog/BlogDetail.jsx";
import Account from "./components/account/Account.jsx";
import AddProduct from "./components/product/AddProduct.jsx";
import MyProduct from "./components/product/MyProduct.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <App>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/login" element={<Index />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blog/detail/:id" element={<BlogDetail />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/my-product" element={<MyProduct />}></Route>
          <Route path="/product/add" element={<AddProduct />}></Route>
        </Routes>
      </App>
    </Router>
  </StrictMode>
);
