import React, {useState, useEffect} from "react";

import Nav from "./Nav";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

import "../scss/elements/_texts.scss";

import {supabase} from "../services";

export default function Texts() {
  const [allPosts, setAllPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      let {data: posts, error} = await supabase.from("posts").select("*");

      if (!error) {
        setAllPost(posts);
      }
      if (error) {
        // toaster.danger("Coś poszło nie tak!");
        console.log(error);
      }
      console.log(posts[0].text);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Nav />
      <div className="texts header">
        <div className="overlay">
          <h1>
            "Natura jest nieskończoną kombinacją"
            <br /> i powtarzaniem zaledwie kilku praw.
          </h1>
          <h2>Ralph Waldo Emerson</h2>
        </div>
      </div>
      <section className="posts">
        <ol className="posts-list">
          {allPosts &&
            allPosts.map((el) => <li key={el.id}>&#8226; {el.title}</li>)}
          {/* <li className="post-name">tekst 1</li>
          <li className="post-name">tekst 2</li>
          <li>tekst 3</li> */}
        </ol>
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
