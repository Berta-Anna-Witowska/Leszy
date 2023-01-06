import React from "react";

import "../scss/elements/_carousel.scss";

import pic1 from "../assets/images/jewellry/product-2.jpg";
import pic2 from "../assets/images/jewellry/product-3.jpg";
import pic3 from "../assets/images/jewellry/product-4.jpg";
import pic4 from "../assets/images/jewellry/product-5.jpg";

export default function Carousel() {
  return (
    <section className="carousel">
      Karuzela ze zdjęciami
      <div className="homepage-pictures">
      <img className="hompage-pic" src={pic1} alt="logo" />
      <img className="hompage-pic" src={pic2} alt="logo" />
      <img className="hompage-pic" src={pic3} alt="logo" />
      <img className="hompage-pic" src={pic4} alt="logo" />

      </div>
    </section>
  );
}
