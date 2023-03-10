import React from "react";
import {useNavigate} from "react-router-dom";
import "../scss/elements/_nav.scss";

import logoWhite from "../assets/logo/Logo-white.png";

export default function Nav(backgroundColor) {
  const navigate = useNavigate();

  return (
    <nav className="page-nav" style={backgroundColor}>
      <ul className="page-nav-list">
        <li className="nav-icon home" onClick={() => navigate("/")}>
          <i className="fa-solid fa-house" />
        </li>
        {/* <li onClick={() => navigate("/gallery")}>Galeria</li>
        <li onClick={() => navigate("/texts")}>Teksty</li>
        <li onClick={() => navigate("/about-me")}>O mnie</li>
        <li className="nav-icon contact" onClick={() => navigate("/contact")}>
          Kontakt
        </li> */}
      </ul>
      <div className="page-nav-logo">
        <img className="logo-pic" src={logoWhite} alt="logo" />
        <h2 className="logo-name">Leszy</h2>
      </div>
      <ul className="page-nav-socialmedia">
        <li>
          <a href="https://www.facebook.com/Rhaqluzja">
            <i className="fa-brands fa-square-facebook" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/rhaqluzja/">
            <i className="fa-brands fa-instagram" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
