import React, {useRef} from "react";

import Nav from "./Nav";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

import "../scss/elements/_contact.scss";

import emailjs from "@emailjs/browser";
import {publicKEY, emailJS_serviceKEY, template} from "../services";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const [email, name, message] = e.target.elements;

    if (name.value.length < 3) {
      // toaster.warning("Imię musi się składać co najmniej z 3 znaków.");
      console.log("Imię musi się składać co najmniej z 3 znaków.");
      return;
    }
    if (message.value.length < 5) {
      // toaster.warning("Wiadomość musi składać się z co najmniej 5 znaków.");
      console.log("Wiadomość musi składać się z co najmniej 5 znaków.");
      return;
    }

    emailjs
      .sendForm(emailJS_serviceKEY, template, form.current, publicKEY)
      .then(
        (result) => {
          // toaster.success("Wiadomość wysłana!");
          console.log("Wiadomość wysłana!");
        },
        (error) => {
          // toaster.danger("Wysyłanie nie powiodło się!");
          console.log("Wysyłanie nie powiodło się !");
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Nav backgroundColor="#262527d1" />
      <section className="contact">
        <div className="sidepanel">
          <div className="overlay">
            <h1>
              "Najprostsza droga do Wszechświata prowadzi przez dzikość lasu."
            </h1>
            <h2>John Muir</h2>
          </div>
        </div>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
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
        <h2>"I w głąb lasu podążam, by zatracić rozum a odnaleźć duszę."</h2>
        <h3>John Muir</h3>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}
