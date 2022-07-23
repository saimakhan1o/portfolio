import React, { useContext } from "react";
import classes from "./Template.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";

function EducationP() {
  const { content, control, contentSample } = useContext(ResumeContext);

  let contentUse;
  if (control) {
    contentUse = contentSample;
  } else {
    contentUse = content;
  }

  let title;
  if (Object.keys(contentUse.education).length === 0) {
    title = "";
  } else {
    title = (
      <h3>
        <strong>Education</strong>
      </h3>
    );
  }

  let bulletEducation;
  if (!contentUse.education.additional) {
    bulletEducation = "";
  } else {
    bulletEducation = (
      <ul>
        <li>{contentUse.education.additional}</li>
      </ul>
    );
  }

  return (
    <div className={classes.professionalResume}>
      <div className="">
        {title}
        <p>
          <strong>{contentUse.education.institution} </strong>{" "}
          {contentUse.education.city}
        </p>
        <p>
          {contentUse.education.major} {contentUse.education.gradYear}
        </p>
        {bulletEducation}
      </div>
    </div>
  );
}

export default EducationP;
