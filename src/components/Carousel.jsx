import React from "react";

import "../scss/elements/_carousel.scss";

import picAutumnSong1 from "../assets/images/drawings/last_autumn_song/last_autumn_song_1.png";
import picAutumnSong2 from "../assets/images/drawings/last_autumn_song/last_autumn_song_2.png";
import picAutumnSong3 from "../assets/images/drawings/last_autumn_song/last_autumn_song_3.png";
import picAutumnSong4 from "../assets/images/drawings/last_autumn_song/last_autumn_song_4.png";
import picAutumnSong5 from "../assets/images/drawings/last_autumn_song/last_autumn_song_5.png";
import picAutumnSong6 from "../assets/images/drawings/last_autumn_song/last_autumn_song_6.png";
import picAutumnSong7 from "../assets/images/drawings/last_autumn_song/last_autumn_song_7.png";
import picAutumnSong8 from "../assets/images/drawings/last_autumn_song/last_autumn_song_8.png";

import pic1 from "../assets/images/jewellry/product-2.jpg";
import pic2 from "../assets/images/jewellry/product-3.jpg";
import pic3 from "../assets/images/jewellry/product-4.jpg";
import pic4 from "../assets/images/jewellry/product-5.jpg";

export default function Carousel() {
  return (
    <section className="carousel">
      <div>
        <img className="picture" src={picAutumnSong1}></img>
        <img className="picture" src={picAutumnSong2}></img>
        <img className="picture" src={picAutumnSong3}></img>
        <img className="picture" src={picAutumnSong4}></img>
        <img className="picture" src={picAutumnSong5}></img>
        <img className="picture" src={picAutumnSong6}></img>
        <img className="picture" src={picAutumnSong7}></img>
        <img className="picture" src={picAutumnSong8}></img>
      </div>
    </section>
  );
}
