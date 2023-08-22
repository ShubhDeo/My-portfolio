import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import {SiLeetcode, SiGeeksforgeeks} from 'react-icons/si'

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Shubh Deo</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
           <li className="social-icons">
                <a
                  href="https://auth.geeksforgeeks.org/user/shxbh_018"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white" }}
                 
                >
                  <SiGeeksforgeeks />
                </a>
            </li>
            <li className="social-icons">
                <a
                  href="https://leetcode.com/mell0/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white" }}
                  
                >
                  <SiLeetcode />
                </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/ShubhDeo"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/shubh-deo/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
