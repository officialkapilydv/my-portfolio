import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Link } from "react-router-dom";
/*import pdf from "../../Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";*/

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={null}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="secondary" style={{ maxWidth: "250px" }}>
              Go to Home
            </Button>
          </Link>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
