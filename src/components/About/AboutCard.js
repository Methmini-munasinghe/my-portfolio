import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          {/* Name & Role */}
          <p style={{ textAlign: "justify" }}>
            Hi! I’m <span className="purple">Methmini Munasinghe</span>, a{" "}
            <span className="purple">MERN Stack Developer</span> and undergraduate
            at the University of Colombo, pursuing a Bachelor's in Information and Communication Technology (Hons).
          </p>

          {/* Summary */}
          <p style={{ textAlign: "justify" }}>
            <b>SUMMARY:</b> Motivated and detail-oriented developer skilled in
            MERN Stack (MongoDB, Express.js, React.js, Node.js). Experienced in creating dynamic, responsive, and user-friendly web applications. Passionate about problem-solving and teamwork, aiming to build impactful software solutions.
          </p>

          {/* Skills */}
          <p>
            <strong className="purple">SKILLS:</strong>
            <ul>
              <li className="about-activity"><ImPointRight /> Frontend: React.js, HTML5, Tailwind CSS, JavaScript, Bootstrap</li>
              <li className="about-activity"><ImPointRight /> Backend: Node.js, Express.js, RESTful APIs</li>
              <li className="about-activity"><ImPointRight /> Databases: MongoDB, MySQL</li>
              <li className="about-activity"><ImPointRight /> Tools & Methodologies: Git, VS Code, Postman, Figma, Agile, Scrum</li>
              <li className="about-activity"><ImPointRight /> Soft Skills: Teamwork, Communication, Adaptability, Problem Solving, Time Management</li>
            </ul>
          </p>

          {/* Relevant Projects */}
          <p>
            <strong className="purple">RELEVANT PROJECTS:</strong>
            <ul>
              <li className="about-activity"><ImPointRight /> Faculty News Mobile Application (Mar - Jun 2025) – 7-screen app for faculty updates with Figma-designed UI/UX.</li>
              <li className="about-activity"><ImPointRight /> Online Buying & Selling Web App – MERN Stack, user authentication, responsive UI</li>
              <li className="about-activity"><ImPointRight /> Food Delivery App – MERN Stack, order management, responsive UI</li>
              <li className="about-activity"><ImPointRight /> Student Mentoring System – MERN Stack, role-based access, scheduling</li>
            </ul>
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Methmini Munasinghe</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
