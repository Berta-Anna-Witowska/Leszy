import React from "react";
import Nav from "./Nav";
import Carousel from "./Carousel";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

import "../scss/elements/_gallery.scss";

export default function Gallery() {
  return (
    <>
      <Nav />
      <div className="gallery header">
        <div className="overlay">
          <h1>
            "Jeśli prawdziwie kochasz naturę,
            <br />
            piękno odnajdziesz wszędzie."
          </h1>
          <h2>Laura Ingalls Wilder</h2>
        </div>
      </div>
      <section className="gallery-images">
        {/* <h3 className="gallery-title">Biżuteria z serca natury</h3> */}

        <div className="main-page-pictures gallery-pictures">
          <Carousel />
          {/* tu mapowanie po linkach z pliku */}
          {/* <img src="./images/products/product-2.jpg" className="gallery-picture" /> */}
        </div>
      </section>
      <div className="quote-banner">
        <h2>"Natura raduje się prostotą."</h2>
        <h3>Isaak Newton</h3>
      </div>
      <Newsletter backgroundColor="white" />
      <Footer />
    </>
  );
}
