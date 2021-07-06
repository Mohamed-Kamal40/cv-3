import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./../style/nav.css";

import React, { Component } from "react";

export default class NavbarComponent extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: false,
    };
  }
  componentDidMount() {
    this.listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (this.state.status === false) {
          this.setState({ status: true });
        }
      } else {
        this.setState({ status: false });
      }
    });
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }
  render() {
    return (
      <Navbar
        className={`shadow ${
          this.state.status === false ? "noscroll" : "scroll"
        }`}
        fixed="top"
        expand="md"
        variant={`${this.state.status === false ? "dark" : "light"}`}
      >
        <Container>
          <Navbar.Brand href="#head">{this.props.name}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="px-3" href="#about">
                ABOUT
              </Nav.Link>
              <Nav.Link className="px-3" href="#skills">
                SKILLS
              </Nav.Link>
              <Nav.Link className="px-3" href="#experience">
                EXPERIENCE
              </Nav.Link>
              <Nav.Link className="px-3" href="#education">
                EDUCATION
              </Nav.Link>
              <Nav.Link className="px-3" href="#references">
                REFERENCES
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
