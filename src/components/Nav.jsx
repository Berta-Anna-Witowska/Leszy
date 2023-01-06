import React from "react";
import {useNavigate} from "react-router-dom";
import "../scss/elements/_nav.scss";

export default function Nav(backgroundColor) {
  const navigate = useNavigate();

  return (
    <nav className="page-nav" style={backgroundColor}>
      <ul className="page-nav-list">
        <li onClick={() => navigate("/")}>
          <i className="fa-solid fa-house" />
        </li>
        <li onClick={() => navigate("/gallery")}>Galeria</li>
        <li onClick={() => navigate("/texts")}>Teksty</li>
        <li onClick={() => navigate("/about-me")}>O mnie</li>
        <li onClick={() => navigate("/contact")}>Kontakt</li>
      </ul>
      <div className="page-nav-logo">
        <i className="fa-solid fa-tree" />
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
