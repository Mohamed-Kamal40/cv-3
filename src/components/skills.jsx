import React from "react";
import "./../style/skills.css";
import Container from "react-bootstrap/Container";
import Skill from "./skill.jsx";

export default function Skills({ skills }) {
  return (
    <div className="bgImg my-5">
      <Container className="px-5 py-3">
        {skills.map((skill, index) => (
          <Skill key={index} skill={skill} />
        ))}
      </Container>
    </div>
  );
}
