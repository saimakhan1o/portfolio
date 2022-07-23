import React, { useContext } from "react";
import Header from "./Header";
import Professional from "./Professional";
import Education from "./Education";
import AdditionalSkills from "./AdditionalSkills";
import Github from "./Github";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import myClasses from "./Left.module.css";
import { ResumeContext } from "../../contexts/ResumeContext";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  rootAdd: {
    background: "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px #F2F3F4",
    color: "white",
    height: 30,
    textAlign: "center",
    fontSize: 10,
    marginTop: 15,
    marginRight: 20,
    fontWeight: 700,
  },
  rootRemove: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 30,
    textAlign: "center",
    minWidth: 130,
    fontSize: 10,
    marginTop: 15,
    marginRight: 20,
    fontWeight: 700,
  },

  headerLink: {
    color: "#0298B8 ",
  },
});

function Left() {
  const { control, addSampleData, removeSampleData } = useContext(ResumeContext);
  const classes = useStyles();

  function useSampleData(e) {
    e.preventDefault();
    addSampleData();
  }

  function clearSampleData(e) {
    e.preventDefault();
    removeSampleData();
  }

  let expData;
  if (control) {
    expData = (
      <Button
        color="secondary"
        onClick={clearSampleData}
        className={classes.rootRemove}
      >
        Remove Example
      </Button>
    );
  } else {
    expData = (
      <Button
        color="primary"
        onClick={useSampleData}
        className={classes.rootAdd}
      >
        Display Example
      </Button>
    );
  }

  return (
    <div className="left">
      <div className={myClasses.headerLeft}>
        <div styles={{ flexGrow: 2 }}>
          <Link to="/" style={{ display: "inline" }}>
               <h2 className={myClasses.templatesH2}>Resume Builder</h2>
          </Link>
        </div>
        <div styles={{ flexGrow: 1 }}>{expData}</div>
      </div>

      <div className="">
        <Router>
          <div className={myClasses.topLeft}>
            <Button
              className={classes.headerLink}
              component={Link}
              to="/basic/header"
            >
              AboutMe
            </Button>
            <Button
              className={classes.headerLink}
              component={Link}
              to="/basic/additional"
            >
              Skills
            </Button>
            <Button
              className={classes.headerLink}
              component={Link}
              to="/basic/professional"
            >
              Experience
            </Button>
            <Button
              className={classes.headerLink}
              component={Link}
              to="/basic/education"
            >
              Education
            </Button>
            </div>
            <div className="divBtnGithub">
                <Button
                    className={classes.headerLink}
                    component={Link}
                    to="/basic/github"
                >
                    Github
                </Button>
            </div>
          <div>
            <hr className={myClasses.hr} />
            <div className={myClasses.formsSection}>
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/basic/header">
                  <Header />
                </Route>
                <Route path="/basic/professional">
                  <Professional />
                </Route>
                <Route path="/basic/education">
                  <Education />
                </Route>
                <Route path="/basic/additional">
                  <AdditionalSkills />
                </Route>
                <Route path="/basic/github">
                    <Github />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default Left;
