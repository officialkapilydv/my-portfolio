import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="PayRoll-Management-System"
              description="The Payroll Management System in Python automates employee salary calculations. It manages payroll by storing employee data, computing salaries with deductions and taxes, and generating payslips. The system ensures accuracy, reduces manual effort, and provides an intuitive interface for efficient payroll processing and record-keeping."
              ghLink="https://github.com/officialkapilydv/PayRoll-Management-System"
              demoLink="https://github.com/officialkapilydv/PayRoll-Management-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="TextTweak"
              description="TextTweak is a web application designed to manipulate text entered by users. Built with JavaScript and ReactJS, this app provides a variety of text manipulation features, making it a handy tool for users who need to tweak their text content."
              ghLink="https://github.com/officialkapilydv/TextTweak"
              demoLink="http://localhost:3000/project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Drupal 10 Information Hub"
              description="Anime Universe is a dynamic web application built on Drupal 10, designed to serve as the ultimate information hub for anime enthusiasts. This platform provides a comprehensive database of anime series, films, characters, and genres, along with community-driven features to enhance user engagement."
              ghLink="https://github.com/officialkapilydv/Drupal_Project"
              demoLink="https://docksalsite/home"              
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={false}
              isBlog={false}
              title="Amazon Prime Dashboard"
              description="The Amazon Prime Dashboard project utilizes Power BI to create an interactive and visually engaging dashboard for analyzing various metrics related to Amazon Prime services. This dashboard aims to provide insights into key performance indicators (KPIs) such as subscriber growth, user engagement, content performance, and revenue trends."
              ghLink="https://github.com/officialkapilydv/AmazonPrime-Dashboard"
              demoLink="https://github.com/officialkapilydv/AmazonPrime-Dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="JUGNU"
              description="The YouTube Webpage Clone project is an ambitious endeavor to recreate the iconic interface and functionality of YouTube using HTML and CSS. This clone aims to provide users with a familiar and seamless video streaming experience, incorporating essential features such as video playback, search functionality, user interactions, and responsive design."
              ghLink="https://github.com/officialkapilydv/YouTube-"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="DHRUVA 2.O"
              description="Project Dhruva is a groundbreaking initiative by BAOIAM PVT LTD aimed at redefining our digital presence through the development of a state-of-the-art company website. This project is not just about creating an online space but about establishing a dynamic, interactive, and user-centric platform that embodies our brand’s ethos and drives engagement, growth, and customer satisfaction."
              ghLink="https://baoiam-web.github.io/Baioam_web/index.html"
              demoLink="https://baoiam-web.github.io/Baioam_web/index.html"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
