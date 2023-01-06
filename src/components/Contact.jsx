import React from "react";
import Nav from "./Nav";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

import "../scss/elements/_contact.scss";

export default function Contact() {
  return (
    <>
      <Nav backgroundColor="#262527d1" />
      <section className="contact">
        <div className="sidepanel">
          <div className="overlay">
            <h1>
              Najprostsza droga do Wszechświata prowadzi przez dzikość lasu.
            </h1>
            <h2>John Muir</h2>
          </div>
        </div>
        <form className="contact-form">
          <input
            type="email"
            name="user_email"
            placeholder="Twój adres e-mail"
            required
          />
          <input type="text" name="user_name" placeholder="Imię" required />
          <textarea
            type="text"
            name="message"
            placeholder="Wpisz wiadomość..."
            rows="6"
            autoComplete="off"
            required
          />
          <button
            // className="circle-medium"
            name="send"
            type="submit"
            value="Submit"
          >
            {/* Wyślij */}
            <i className="fa-solid fa-envelope-open-text"></i>
          </button>
        </form>
      </section>
      <div className="quote-banner">
        <h2>I w głąb lasu podążam, by zatracić rozum a odnaleźć duszę.</h2>
        <h3>John Muir</h3>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}
