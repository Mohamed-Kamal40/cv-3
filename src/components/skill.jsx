import React from "react";
import "./../style/skills.css";

export default function Skill({ skill }) {
  return (
    <div className="prog-con py-3">
      <div className="d-flex justify-content-md-between">
        <p>{skill.tech}</p>
        <p>{skill.percentage}</p>
      </div>
      <progress className="w-100" value={skill.percentage} max="100"></progress>
    </div>
  );
}
