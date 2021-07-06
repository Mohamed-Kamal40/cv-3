import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import logo from "../assets/logo.png";
import { Facebook, Twitter, Instagram } from "react-bootstrap-icons";

export default function Footer({ person, info }) {
  return (
    <footer className="bg-dark text-white py-3 text-center">
      <Container>
        <Row>
          <Col className="p-3" xs={12} md={4}>
            <p>&copy; Proudly created by</p>
            <img src={logo} alt="logo" width="100" className="img-fluid" />
          </Col>
          <Col className="p-3" xs={12} md={4}>
            <p>Call: {info.phone}</p>
            <p>Email: {info.email}</p>
          </Col>
          <Col className="p-3" xs={12} md={4}>
            <p>Follow</p>
            <a
              href={person.facebook}
              title="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook className="icons mx-3" />
            </a>
            <a
              href={person.twitter}
              title="Twitter"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter className="icons mx-3" />
            </a>
            <a
              href={person.instagram}
              title="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="icons mx-3" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
