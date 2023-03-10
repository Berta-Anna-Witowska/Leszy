import React, {useState} from "react";

import Nav from "./Nav";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

import product1pic from "../assets/images/jewellry/product-1.jpg";
import product2pic from "../assets/images/jewellry/product-2.jpg";
import product3pic from "../assets/images/jewellry/product-3.jpg";
import product4pic from "../assets/images/jewellry/product-4.jpg";
import product5pic from "../assets/images/jewellry/product-5.jpg";

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
      <div className="homepage-pictures">
        <img className="hompage-pic" src={product2pic} alt="logo" />
        <img className="hompage-pic" src={product3pic} alt="logo" />
        <img className="hompage-pic" src={product4pic} alt="logo" />
        <img className="hompage-pic" src={product5pic} alt="logo" />
      </div>
      <Newsletter backgroundColor="#f1f1ef" />
      <Footer />
    </>
  );
}
