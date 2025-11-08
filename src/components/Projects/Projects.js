import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// 🖼️ Import your own images here
import faculty1 from "../../Assets/Projects/faculty1.png";
import online_shop from "../../Assets/Projects/online_shop.png";
import food_delivery from "../../Assets/Projects/food_delivery.png";
import library from "../../Assets/Projects/library.png";
import mentoring from "../../Assets/Projects/mentoring.png";
import weather_app from "../../Assets/Projects/weather_app.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Faculty News App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={faculty1}
              isBlog={false}
              title="Faculty News Mobile App"
              description="Developed a 7-screen Android app for faculty updates such as sports, academic, and event news with a Figma-designed UI/UX. Ensured smooth navigation and content organization."
              ghLink="https://github.com/Methmini-munasinghe/uni_lens_dev.git"
            />
          </Col>

          {/* Online Buying & Selling Web App (Ongoing) */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={online_shop}
              isBlog={false}
              title="Online Buying & Selling Web App 🚧 (Ongoing)"
              description="Developing a full-stack MERN web app for product trading with authentication, product management, and a responsive React UI. Uses MongoDB, Express.js, React.js, and Node.js."
              ghLink="https://github.com/Methmini-munasinghe/i-computers-frontend.git"
              ghLink2="https://github.com/Methmini-munasinghe/i-computers-backend.git"
            />
          </Col>

          {/* Food Delivery App (Ongoing) */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food_delivery}
              isBlog={false}
              title="Food Delivery App 🚧 (Ongoing)"
              description="Building a full-stack food delivery platform with user authentication, order management, and modern UI using MERN stack technologies. Focused on real-time order tracking and responsive design."
              ghLink="https://github.com/Methmini-munasinghe/food-delivery-app"
            />
          </Col>

          {/* Library Management System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={library}
              isBlog={false}
              title="Library Management System"
              description="Responsive web-based system for managing book records, borrowing, and returns. Built with HTML, CSS, JavaScript, PHP, and MySQL, featuring CRUD operations and secure data handling."
              ghLink="https://github.com/Methmini-munasinghe/LibrarySystem"
            />
          </Col>

          {/* Student Mentoring System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mentoring}
              isBlog={false}
              title="Student Mentoring System"
              description="Full-stack MERN mentoring platform for university students and mentors. Includes role-based access, scheduling, and responsive UI design."
              ghLink="https://github.com/DhanukaND1/SMS-Project.git"
            />
          </Col>

          {/* Weather App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather_app}
              isBlog={false}
              title="Weather App"
              description="A real-time weather information app with a user-friendly, responsive interface built using React.js, JavaScript, HTML, and CSS."
              ghLink="https://github.com/Methmini-munasinghe/weather-app.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
