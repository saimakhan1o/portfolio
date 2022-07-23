import React, { createContext, useState, useEffect } from "react";
import sampleData from "../utils/sample_data";

export const ResumeContext = createContext();

const ResumeContextProvider = (props) => {
  //If there is no data stored in localStorage, then use the default object.
  const [content, setContent] = useState(
    JSON.parse(localStorage.getItem("dataLocal")) || {
      header: {},
      professional: { resp1: ["", "", ""], resp2: ["", "", ""] },
      education: {},
      additional: [],
      github: [],
    }
  );

  const [contentSample, setContentSample] = useState();
  const [control, setControl] = useState(false);
  function updateHeaderData(data) {
    setContent({ ...content, header: data });
  }

  function updateProfessionalData(data) {
    setContent({ ...content, professional: data });
  }

  function updateEducationData(data) {
    setContent({ ...content, education: data });
  }

  function updateAdditionalData(data) {
    setContent({ ...content, additional: Object.values(data) }); 
  }

    function updateGithubData(data) {
        setContent({ ...content, github: Object.values(data) });
    }

  function addSampleData() {
    setControl(true);
    setContentSample(sampleData);
  }

  function removeSampleData() {
    setControl(false);
    setContentSample({
      header: {},
      professional: { resp1: ["", "", ""], resp2: ["", "", ""] },
      education: {},
        additional: [],
        github: [],
    });
  }
  useEffect(() => {
    localStorage.setItem("dataLocal", JSON.stringify(content));
  }, [content]);

  return (
    <ResumeContext.Provider
      value={{
        content,
        control,
        contentSample,
        setContent,
        updateHeaderData,
        updateProfessionalData,
        updateEducationData,
              updateAdditionalData,
              updateGithubData,
        addSampleData,
        removeSampleData,
      }}
    >
      {}
      {props.children}
    </ResumeContext.Provider>
  );
};

export default ResumeContextProvider;
