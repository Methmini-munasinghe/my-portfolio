import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";

import mernCV from "../../Assets/my_CV_S.pdf";
import uiuxCV from "../../Assets/my_CV_M.pdf";

import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import "./ResumeNew.css"; // import the CSS file

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [selectedPDF, setSelectedPDF] = useState(mernCV);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <Container fluid className="resume-section">
        <Particle />

        {/* Buttons Row */}
        <Row
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
            marginLeft: "500px",
            zIndex: 2,
            position: "relative",
            top: 50,
            width: "400px",
            paddingBottom: "10px",

            


          }}
        >
          {/* MERN CV Button */}
          <a
            href={mernCV}
            download="Methmini_MERN_Stack_CV.pdf"
            onClick={() => setSelectedPDF(mernCV)}
            className="cv-button mern-button"
          >
            <AiOutlineDownload style={{ verticalAlign: "middle" }} /> MERN Stack CV
          </a>

          {/* UI/UX CV Button */}
          <a
            href={uiuxCV}
            download="Methmini_UIUX_Engineer_CV.pdf"
            onClick={() => setSelectedPDF(uiuxCV)}
            className="cv-button uiux-button"
          >
            <AiOutlineDownload style={{ verticalAlign: "middle" }} /> UI/UX CV
          </a>
        </Row>

        {/* PDF Preview */}
        <Row className="resume">
          <Document
            key={selectedPDF}
            file={selectedPDF}
            className="d-flex justify-content-center"
          >
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>


      </Container>
    </div>
  );
}

export default ResumeNew;
