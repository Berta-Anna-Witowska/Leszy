import React from "react";
import Nav from "./Nav";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

import profilePic from "../assets/profile_pic.jpg";

import "../scss/elements/_aboutme.scss";

export default function AboutMe() {
  return (
    <>
      <Nav />
      <div className="about-me header">
        <div className="overlay">
          <h1>"Natura zawsze ubiera barwy duszy."</h1>
          <h2>Ralph Waldo Emerson</h2>
        </div>
      </div>
      <div className="about-me-bio">
        <img className="profile-pic" src={profilePic} alt="zdjęcie profilowe" />

        <p className="bio">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          laboriosam assumenda corporis rem nulla autem quam necessitatibus,
          quasi nesciunt consequatur dolorem voluptatibus aperiam animi iusto
          laborum modi expedita, dolores qui.
        </p>
      </div>
      <div className="quote-banner">
        <h2>"Twe najgłębsze korzenie sięgają natury."</h2>
        <h3>Charles Cook</h3>
      </div>
      <Newsletter backgroundColor="white" />
      <Footer />
    </>
  );
}
