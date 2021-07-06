import React from "react";
import "./../style/cover.css";
import profile from "../assets/profile.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { Facebook, Twitter, Instagram } from "react-bootstrap-icons";

export default function Cover({ person }) {
  return (
    <div id="head" className="coverImg text-light text-center">
      <div className="layer d-flex justify-content-center align-items-center">
        <div>
          <Image
            className="border"
            width="200"
            height="200"
            roundedCircle
            src={profile}
          />
          <h1>{person.name}</h1>
          <h4>{person.job}</h4>
          <div className="my-3">
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
          </div>
          <Button download href={person.cv} variant="success">
            Download CV
          </Button>
          <br />
        </div>
      </div>
    </div>
  );
}
