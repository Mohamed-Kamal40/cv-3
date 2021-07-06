import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./../style/card.css";

export default function Card({ work, education }) {
  if (work)
    return (
      <React.Fragment>
        <Col xs={12} className="py-3">
          <Row className="bg-white shadow px-0">
            <Col
              xs={12}
              md={3}
              className="bg text-light d-flex justify-content-center align-items-center text-center px-4"
            >
              <div>
                <h5>{work.date}</h5>
                <h3>{work.company}</h3>
              </div>
            </Col>
            <Col xs={12} md={9} className="px-4 py-2">
              <h3 className="py-2">{work.position}</h3>
              <p className="text-muted">{work.descripttion}</p>
            </Col>
          </Row>
        </Col>
      </React.Fragment>
    );
  else if (education)
    return (
      <React.Fragment>
        <Col xs={12} className="py-3">
          <Row className="bg-white shadow px-0">
            <Col
              xs={12}
              md={3}
              className="bg text-light d-flex justify-content-center align-items-center text-center px-4"
            >
              <div>
                <h5>{education.date}</h5>
                <h3>{education.degree}</h3>
              </div>
            </Col>
            <Col xs={12} md={9} className="px-5 py-2">
              <h3 className="py-2">{education.magority}</h3>
              <h6 className="py-2">{education.place}</h6>
              <p className="text-muted">{education.descripttion}</p>
            </Col>
          </Row>
        </Col>
      </React.Fragment>
    );
  else return "";
}
