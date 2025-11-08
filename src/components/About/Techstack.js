import React from "react";
import { Col, Row } from "react-bootstrap";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Angular from "../../Assets/TechIcons/Angular.svg";
import Mysql from "../../Assets/TechIcons/Mysql.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";

const iconStyle = { height: "60px", width: "60px", objectFit: "contain" };

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" style={iconStyle} />
        <div className="tech-icons-text">JavaScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" style={iconStyle} />
        <div className="tech-icons-text">React.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="node" style={iconStyle} />
        <div className="tech-icons-text">Node.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Angular} alt="angular" style={iconStyle} />
        <div className="tech-icons-text">Angular.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="mongoDb" style={iconStyle} />
        <div className="tech-icons-text">MongoDB</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" style={iconStyle} />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mysql} alt="mysql" style={iconStyle} />
        <div className="tech-icons-text">MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="firebase" style={iconStyle} />
        <div className="tech-icons-text">Firebase</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" style={iconStyle} />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>


    </Row>
  );
}

export default Techstack;
