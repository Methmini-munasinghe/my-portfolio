import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/logo.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m <b className="purple">Methmini Munasinghe</b>, an enthusiastic{" "}
              <b className="purple">MERN Stack Developer</b> and undergraduate at
              the University of Colombo, pursuing a Bachelor’s in Information and Communication Technology (Hons).
              <br />
              <br />
              I’m passionate about crafting{" "}
              <b className="purple">dynamic, responsive, and user-friendly web applications</b> that make an impact. 
              My focus lies in turning ideas into practical software solutions through creativity and clean code.
              <br />
              <br />
              I’m skilled in:
              <i>
                <b className="purple">
                  {" "}
                  React.js, Node.js, Express.js, MongoDB, HTML5, Tailwind CSS, and JavaScript{" "}
                </b>
              </i>
              — with experience across both front-end and back-end development.
              <br />
              <br />
              I also have hands-on experience with technologies like{" "}
              <i>
                <b className="purple">MySQL, Java, Python, C(Basic), C++(Basic) and PHP</b>
              </i>
              , and enjoy using tools such as{" "}
              <b className="purple">Git, VS Code, Postman, and Figma</b> for UI/UX design.
              <br />
              <br />
              My projects range from{" "}
              <b className="purple">Online Buying & Selling Platforms</b> and{" "}
              <b className="purple">Food Delivery Apps</b> to{" "}
              <b className="purple">Mentoring Systems</b> and{" "}
              <b className="purple">Library Management Systems</b>. Each one has deepened my passion for
              full-stack development and problem-solving.
              <br />
              <br />
              Beyond coding, I’m an active participant in{" "}
              <b className="purple">sports, content creation, and leadership roles</b>, 
              which help me build strong teamwork, adaptability, and time management skills.
              <br />
              <br />
              I’m always eager to collaborate, learn new technologies, and create software that truly makes a difference.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid rounded-full shadow-lg border-4 border-purple-500 hover:scale-105 transition-transform duration-500 cursor-pointer filter grayscale hover:grayscale-0"
                alt="Methmini Munasinghe"
/>

            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
    
  );
}

export default Home2;
