import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About({ info }) {
  return (
    <div className="my-5 py-5">
      <Container className="px-5 py-3">
        <Row className="bg-light shadow p-4 rounded">
          <Col className="pe-5" xs={12} md={6}>
            <h2 className="py-2">About</h2>
            <p className="text-muted py-2">{info.welcomeMessage}</p>
            <p className="text-muted py-2">{info.pref}</p>
          </Col>
          <Col xs={12} md={6}>
            <h2 className="py-2">Basic Information</h2>
            <Row>
              <Col xs={4}>
                <b>AGE:</b>
              </Col>
              <Col xs={8}>
                <p>{info.age}</p>
              </Col>
              <Col xs={4}>
                <b>EMAIL:</b>
              </Col>
              <Col xs={8}>
                <p>{info.email}</p>
              </Col>
              <Col xs={4}>
                <b>PHONE:</b>
              </Col>
              <Col xs={8}>
                <p>{info.phone}</p>
              </Col>
              <Col xs={4}>
                <b>ADDRESS:</b>
              </Col>
              <Col xs={8}>
                <p>{info.address}</p>
              </Col>
              <Col xs={4}>
                <b>LANGUAGE:</b>
              </Col>
              <Col xs={8}>
                <p>{info.languages}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
