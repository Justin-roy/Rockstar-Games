import React, { Fragment } from "react";
import Vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";
function Home() {
  return (
    <Fragment>
      <div className="home" id="/home">
        <main>
          <h1>Rockstar Games</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui animi
            ab eius vitae officia sed quidem iusto reprehenderit necessitatibus
            cumque? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Qui animi ab eius vitae officia sed quidem iusto reprehenderit
            necessitatibus cumque? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Qui animi ab eius vitae officia sed quidem iusto
            reprehenderit necessitatibus cumque?
          </p>
        </main>
      </div>

      <div className="home2">
        <img src={Vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, voluptatem. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatibus, voluptatem. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Voluptatibus, voluptatem. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
            voluptatem.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>About</h1>
          <p>
            Rockstar Games is a renowned video game development and publishing
            company known for creating some of the most critically acclaimed and
            commercially successful titles in the gaming industry. Established
            in 1998, Rockstar Games is a subsidiary of Take-Two Interactive. The
            company has gained widespread recognition for its commitment to
            delivering immersive and innovative gaming experiences. Rockstar is
            particularly celebrated for franchises like Grand Theft Auto, Red
            Dead Redemption, and Max Payne, which have set new standards for
            open-world gameplay, storytelling, and attention to detail. With a
            reputation for pushing boundaries and redefining gaming genres,
            Rockstar Games continues to captivate a global audience with its
            groundbreaking releases.
          </p>
        </div>
      </div>

      <div className="home4" id="sponsers">
        <div>
          <h1>Sponsers</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillFacebook />
              <p>Facebook</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillTwitterCircle />
              <p>Twitter</p>
            </div>
            <div style={{ animationDelay: "0.85s" }}>
              <AiFillLinkedin />
              <p>LinkedIn</p>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <AiFillGithub />
              <p>Github</p>
            </div>
          </article>
        </div>
      </div>
      <div className="home5" id="contact">
        <main>
          <h1>Contact Us</h1>
          <form>
            <div>
              <label>Name</label>
              <input type="text" required placeholder="ABC" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" required placeholder="ABC@gmail.com" />
            </div>
            <div>
              <label>Message</label>
              <input type="text" required placeholder="Type your Query.." />
            </div>

            <button type="submit">Send</button>
          </form>
        </main>
      </div>
    </Fragment>
  );
}

export default Home;
