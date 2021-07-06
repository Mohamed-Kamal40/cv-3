import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./../style/references.css";

export default function References({ references }) {
  return (
    <div className="coverImg2">
      <div className="layer py-5">
        <Container className="p-3">
          <Row>
            {references.map((reference, index) => {
              return (
                <Col className="p-3" key={index} xs={12} md={6} lg={4}>
                  <div className="bg-white shadow rounded">
                    <video className="img-fluid rounded" controls>
                      <source src={reference.video} type="video/mp4" />
                    </video>
                    <div className="p-3">
                      <h4>{reference.name}</h4>
                      <h6>
                        {reference.position} / {reference.company}
                      </h6>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          {/* <Carousel className="bg-white shadow">
        {references.map((reference, index) => {
          return (
            <Carousel.Item key={index}>
              <Row>
                <Col xs={12} md={5}>
                  <video className="img-fluid" controls>
                    <source src={reference.video} type="video/mp4" />
                  </video>
                </Col>adada
              </Row>
            </Carousel.Item>
          );
        })}
      </Carousel> */}
        </Container>
      </div>
    </div>
  );
}
