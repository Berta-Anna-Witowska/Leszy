import React from "react";

import "../scss/elements/_newsletter.scss";

export default function Newsletter(backgroundColor) {
  return (
    <section className="newsletter" style={backgroundColor}>
      <span>Chcesz otrzymywać powiadomienia? Zapisz się do newsletter'a:</span>
      <form className="newsletter-form">
        <input
          type="email"
          name="user_email"
          placeholder="Twój adres e-mail"
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
  );
}
