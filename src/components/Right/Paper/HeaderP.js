import React, { useContext } from "react";
import classes from "./Template.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";

function HeaderP() {
  const { content, control, contentSample } = useContext(ResumeContext);

  let contentUse;
  if (control) {
    contentUse = contentSample;
  } else {
    contentUse = content;
  }

  let divider;
  if (Object.keys(contentUse.header).length > 0) {
    divider = <hr className={classes.dividerRight} />;
  } else {
    divider = "";
  }

  return (
    <div>
      <div className={classes.headerResume}>
        <div className={classes.contentHeader}>
          <h1 className={classes.h1Name}>{contentUse.header.name}</h1>
          <p>
            {contentUse.header.address}
            <br />
            {contentUse.header.city} {contentUse.header.state}
            {"  "}
            {contentUse.header.zip}
            <br />
            {contentUse.header.phone}
            <br />
            {contentUse.header.email}
          </p>
          <br />
          <p>{contentUse.header.summary}</p>
          {divider}
        </div>
      </div>
    </div>
  );
}

export default HeaderP;
