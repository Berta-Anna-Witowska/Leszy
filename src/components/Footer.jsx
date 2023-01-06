import React from "react";
import {useNavigate} from "react-router-dom";

import "../scss/elements/_footer.scss";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <div className="footer">
      <ul className="footer-menu">
        <li onClick={() => navigate("/")}>Strona główna</li>
        <li onClick={() => navigate("/about-me")}>O mnie</li>
        <li onClick={() => navigate("/gallery")}>Galeria</li>
        <li onClick={() => navigate("/texts")}>Teksty</li>
      </ul>
      <div className="footer-centralsection">
        <div className="footer-logo" onClick={() => navigate("/")}>
          <i className="fa-solid fa-tree" />
          <h2 className="logo-name">Leszy</h2>
        </div>
        <span className="copyright"> Copyright &#169; Berta Anna Witowska</span>
        <a className="github" href="https://github.com/Berta-Anna-Witowska">
          <i className="fa-brands fa-github" />
        </a>
      </div>
      <nav className="footer-socialmedia">
        <a href="https://www.facebook.com/Rhaqluzja">
          <i className="fa-brands fa-square-facebook" />
        </a>
        <a href="https://www.instagram.com/rhaqluzja/">
          <i className="fa-brands fa-instagram" />
        </a>
      </nav>
    </div>
  );
}
