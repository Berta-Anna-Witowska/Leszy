import React from "react";
import {useNavigate} from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="page-nav">
        <ul className="page-nav-list">
          <li onClick={() => navigate("/")}>Strona główna</li>
          <li onClick={() => navigate("/about-me")}>O mnie</li>
          <li onClick={() => navigate("/gallery")}>Galeria</li>
          <li onClick={() => navigate("/texts")}>Teksty</li>
          <li onClick={() => navigate("/contact")}>Kontakt</li>
        </ul>
        <h1 className="page-nav-logo">Logo Leszy</h1>
        <ul className="page-nav-socialmedia">
          <li>FB</li>
          <li>IG</li>
        </ul>
      </nav>
    </>
  );
}
