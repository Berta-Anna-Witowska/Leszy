import React from "react";
import Nav from "./Nav";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

import "../scss/elements/_texts.scss";

export default function Texts() {
  return (
    <>
      <Nav />
      <div className="texts header">
        <div className="overlay">
          <h1>
            Natura jest nieskończoną kombinacją i powtarzaniem zaledwie kilku
            praw.
          </h1>
          <h2>Ralph Waldo Emerson</h2>
        </div>
      </div>
      <section className="posts">
        <ul className="posts-list">
          <li className="post-name">tekst 1</li>
          <li className="post-name">tekst 2</li>
          <li>tekst 3</li>
        </ul>
        <div className="post">
          <h3 className="post-title">Tytuł posta</h3>
          <p className="post-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            corrupti eum doloremque, beatae culpa debitis asperiores.
            Reprehenderit expedita eveniet, quo voluptas dolorem animi
            accusantium labore iusto, error assumenda ducimus. Laborum? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Nihil corrupti
            eum doloremque, beatae culpa debitis asperiores. Reprehenderit
            expedita eveniet, quo voluptas dolorem animi accusantium labore
            iusto, error assumenda ducimus. Laborum? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nihil corrupti eum doloremque, beatae
            culpa debitis asperiores. Reprehenderit expedita eveniet, quo
            voluptas dolorem animi accusantium labore iusto, error assumenda
            ducimus. Laborum?
          </p>
        </div>
      </section>
      <div className="quote-banner">
        <h2>"Spójrz w głąb natury, a wszystko zrozumiesz lepiej."</h2>
        <h3>Isaak NewtonAlbert Einstein</h3>
      </div>
      <Newsletter backgroundColor="white" />
      <Footer />
    </>
  );
}
