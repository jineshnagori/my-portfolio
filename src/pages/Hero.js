import React from "react";
import Pdf from "../documents/Jinesh-Resume.pdf";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-wrapper">
          <div className="hero-img">
            <img
              className="show img-fluid"
              src={process.env.PUBLIC_URL + "/assets/images/dhero.png"}
              alt="Jinesh Nagori Light"
            />
            <img
              className="hide img-fluid"
              src={process.env.PUBLIC_URL + "/assets/images/hero.png"}
              alt="Jinesh Nagori Light"
            />
          </div>
          <div className="hero-content">
            <h5 className="hero-title">Hello, I'm</h5>
            <h1 className="hero-name">Jinesh Nagori</h1>
            <p className="hero-about">
              A passionate <strong>Pull Stack Developer</strong> with around<strong> 2.5 years</strong> of
              experience in pulling things from Google and putting them into the
              code to<strong> create and manage applications.</strong>
            </p>
          </div>
          <div className="hero-btns">
            <a
              href={Pdf}
              target="_blank"
              rel="noreferrer"
              className="hero-btn-1 d-flex justify-content-center align-items-center"
            >
              <p className="mb-0">Download CV</p>
              <i class="ri-download-2-line"></i>
            </a>
            <a
              href="#contact"
              className="hero-btn-2 d-flex justify-content-center align-items-center"
            >
              <p className="mb-0">Contact Me</p>
              <i class="ri-message-3-line"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
