import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "./card.jsx";

export default function CardsComponent({ work, education }) {
  return (
    <Container className="px-5 py-3">
      <Row>
        {work
          ? work.map((w, index) => <Card work={w} key={index} />)
          : education
          ? education.map((e, index) => <Card key={index} education={e} />)
          : ""}
      </Row>
    </Container>
  );
}
