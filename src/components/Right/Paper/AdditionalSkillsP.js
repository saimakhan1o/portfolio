import React, { useContext } from "react";
import classes from "./Template.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";

function AdditionalSkillsP() {
  const { content, control, contentSample } = useContext(ResumeContext);

  let contentUse;
  if (control) {
    contentUse = contentSample;
  } else {
    contentUse = content;
  }

  let title;
  if (contentUse.additional.length === 0) {
    title = "";
  } else {
    title = (
      <h3>
        <strong>Skills</strong>
      </h3>
    );
  }

  let bulletsData = contentUse.additional.map((el, index) => {
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
        <ul>{bulletsData}</ul>
      </div>
    </div>
  );
}

export default AdditionalSkillsP;
