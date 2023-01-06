import React, {useState} from "react";

import Nav from "./Nav";
import Carousel from "./Carousel";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

import product1pic from "../assets/images/jewellry/product-1.jpg";

import "../scss/elements/_homepage.scss";

export default function HomePage() {
  return (
    <>
      <Nav backgroundColor="#26252788" />
      <div className="homepage-header">
        <div className="overlay">
          <img
            className="header-pic"
            src={product1pic}
            alt="zdjęcie naszyjnika z drewna"
          />
          <div className="homepage-quote">
            <h4>
              Zmieniam; <br /> przeobrażam; <br /> tworzę.
            </h4>
            <h2>Wszystko jest możliwe...</h2>
          </div>
        </div>
      </div>
      <div className="quote-banner">
        <h2>"Jeden dotyk natury sprawia, że cały świat jest bliski."</h2>
        <h3>William Shakespeare</h3>
      </div>
      <Carousel />
      <Newsletter backgroundColor="#f1f1ef" />
      <Footer />
    </>
  );
}
