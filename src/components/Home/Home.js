import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/methmini.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import "./Home.css";

import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsArrowDownCircle } from "react-icons/bs";

function Home() {
  const [showArrow, setShowArrow] = useState(true);
  const aboutRef = useRef(null); // <-- Step 1: create ref

  const handleScroll = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      setShowArrow(false);
    }
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> METHMINI MUNASINGHE</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} className="d-flex justify-content-center align-items-center">
              <div className="profile-img-container">
                <img
                  src={homeLogo}
                  alt="Methmini Munasinghe"
                  className="profile-img"
                />
              </div>
            </Col>
          </Row>
        </Container>

        {/* Scroll Down Arrow */}
        {showArrow && (
          <div className="scroll-arrow" onClick={handleScroll}>
            <BsArrowDownCircle />
          </div>
        )}
      </Container>

      {/* 💼 About Section */}
      {/* Step 2: attach ref to Home2 container */}
      <div ref={aboutRef}>
        <Home2 />
      </div>

      {/* 🌐 Social Links */}
      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Methmini-munasinghe"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/methmini-munasinghe-582959293/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>


            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
