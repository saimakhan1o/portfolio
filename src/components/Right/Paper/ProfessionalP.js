import React, { useContext } from "react";
import classes from "./Template.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";

function ProfessionalP() {
  const { content, control, contentSample } = useContext(ResumeContext);

  let contentUse;
  if (control) {
    contentUse = contentSample;
  } else {
    contentUse = content;
  }

  let title;
  if (Object.keys(contentUse.professional).length < 3) {
    title = "";
  } else {
    title = (
      <h3>
        <strong>Experience</strong>
      </h3>
    );
  }

  let bulletProfessional1 = contentUse.professional.resp1.map((el, index) => {
    if (el === "") {
      return "";
    } else {
      return <li key={index}>{el}</li>;
    }
  });

  let bulletProfessional2 = contentUse.professional.resp2.map((el, index) => {
    if (el === "") {
      return "";
    } else {
      return <li key={index}>{el}</li>;
    }
  });

  return (
    <div className={classes.professionalResume}>
      <div className="">
        {title}
        <p>
          <strong>{contentUse.professional.company1}</strong>{" "}
          {contentUse.professional.local1}
        </p>
        <p>
          {contentUse.professional.position1} {contentUse.professional.start1}{" "}
          {contentUse.professional.end1}
        </p>
        <ul>{bulletProfessional1}</ul>
        <p>
          <strong>{contentUse.professional.company2}</strong>{" "}
          {contentUse.professional.local2}
        </p>
        <p>
          {contentUse.professional.position2} {contentUse.professional.start2}{" "}
          {contentUse.professional.end2}
        </p>
        <ul>{bulletProfessional2}</ul>
      </div>
    </div>
  );
}

export default ProfessionalP;
