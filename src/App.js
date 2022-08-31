import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Signin from "./Pages/Auth/Signin";
import Signup from "./Pages/Auth/Signup";
import Products from "./Pages/Products";
import Error404 from "./Pages/Error404";
import Container from "./Components/Container";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Pages/Cart";
import Favorites from "./Pages/Favorites";

// const BannerPic = new URL ("./images/banner.png",import.meta.url)

function App() {
  return (
    <div className="App">
      <h1> Sweet Creations </h1>
      {/* <img> src={BannerPic}</img> */}
      <header className="App-header"></header>
      <b> @S W E E T C R E A T I O N S C O M </b>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" exact element={<Products />} />
          <Route path="/:category_id" element={<Products />} />

          <Route path="/Products/:product_id" element={<ProductDetail />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
