import React from "react";
import { Col, Row } from "react-bootstrap";
import Chrome from "../../Assets/TechIcons/Google Chrome.svg";
import VSCode from "../../Assets/TechIcons/vscode.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import Angular from "../../Assets/TechIcons/Angular.svg";
import Figma from "../../Assets/TechIcons/Figma.svg";

// Set uniform size for all tool icons
const iconStyle = { height: "60px", width: "60px", objectFit: "contain" };

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Chrome} alt="Google Chrome" style={iconStyle} />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={VSCode} alt="VS Code" style={iconStyle} />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" style={iconStyle} />
        <div className="tech-icons-text">Postman</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Angular} alt="Angular CLI" style={iconStyle} />
        <div className="tech-icons-text">Angular CLI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Figma} alt="Figma" style={iconStyle} />
        <div className="tech-icons-text">Figma</div>
      </Col>

    </Row>
  );
}

export default Toolstack;
