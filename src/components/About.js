import React from "react";
import Links from "./Links";

function About({ bio, github, linkedin }) {
  return (
    <div >
      <h2>About Me</h2>
      <p>(bio)</p>
      <img src="https://via.placeholder.com/150" alt="Developer illustration" />
      <h3>Links</h3>
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
