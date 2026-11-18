import React from "react";
import "./Home.css";
import profileImg from "../assets/me.jpg";

const Home = () => {
  return (
    <section id="Home" className="home-section">
      <div className="home-container">
        <img
          src={profileImg}
          alt="Bryce Townsend portrait"
          className="home-image"
        />

        <div className="home-content">
          <h1>Hi, I’m Bryce Townsend</h1>

          <p className="home-description">
          Pricing analyst who turns data into smart decisions. 
          With a background in analytics and full-stack development, I build both the insights and the tools behind them. 
          I’m looking for opportunities in data analytics and software development.
          </p>

          <div className="home-buttons">
            <a
              href="https://github.com/bgt1717"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn secondary">GitHub</button>
            </a>

            <a
              href="https://drive.google.com/file/d/18Zh7zUWPuhtf5kynwA5WoezYj_jke5cv/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn primary">View Resume</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
