import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view shadow-lg border-0 rounded-4 overflow-hidden">
      <div className="project-image-container">
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="project-img"
          className="project-image object-cover w-100 h-64"
          style={{ objectFit: "cover" }}
        />
      </div>

      <Card.Body className="text-center">
        <Card.Title className="fw-semibold">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>

        <div className="d-flex justify-content-center flex-wrap gap-2 mt-3">
          {/* Main GitHub button */}
          {props.ghLink && (
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              className="fw-semibold"
            >
              <BsGithub /> &nbsp; GitHub
              {props.ghLabel ? ` (${props.ghLabel})` : ""}
            </Button>
          )}

          {/* Optional second GitHub button (e.g., backend) */}
          {props.ghLink2 && (
            <Button
              variant="dark"
              href={props.ghLink2}
              target="_blank"
              className="fw-semibold"
            >
              <BsGithub /> &nbsp; GitHub (Backend)
            </Button>
          )}


       
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
