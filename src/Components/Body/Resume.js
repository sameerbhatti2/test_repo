import React from "react";
import { makeStyles } from "@mui/styles";
import profile from "../img/sameer1.jpg";
import "./Components.css";

const useStyle = makeStyles((theme) => ({
  cont_box: {
    maxWidth: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // flexDirection: "column",
    color: "white",
    textAlign: "left",
    padding: "3vmax",
    [theme.breakpoints.down("md")]: {
      "& div p": { wordWrap: "break-word" },
      "& div": { position: "static", wordWrap: "break-word" },
      // "& .makeStyles-img-3": {
      //   position: "absolute",
      //   left: "0",
      //   wordWrap: "break-word",
      // },
      "& div h4 a": { wordWrap: "break-word" },
      flexDirection: "column",
      textAlign: "center",
    },
  },
  resume_tet: {
    position: "relative",
    left: "20vmax",
    top: "4vmax",
  },
  img: {
    position: "fixed",
    top: "8vmax",
    left: "8vmax",
  },
  gardent01: {
    background:
      "linear-gradient(29deg, rgba(2,0,36,1) 24%, rgba(69,4,88,1) 71%, rgba(62,57,184,1) 100%)",
  },
}));

function Resume() {
  const classes = useStyle();
  return (
    <>
      <div
        className={`${classes.cont_box} ${classes.gardent01}`}
        style={{ position: "relative" }}
      >
        <div className={classes.img}>
          <img
            src={profile}
            alt="profile"
            style={{ border: "none", borderRadius: "4px", width: "16vmax" }}
          />
        </div>
        <div className={classes.resume_tet}>
          <p>
            <br />
            <h2>Linkedin : </h2>
            <a
              href="https://www.linkedin.com/in/sameer-bhatti-8a2256235"
              target="_blank"
            >
              linkedin.com/in/sameer-bhatti-8a2256235
            </a>
            <br />
            <br />
            <h2>Objective :</h2>
            Looking to utilize broad knowledge of programming,
            <br />
            software engineering lifecycle,
            <br />
            and data management to perform programming
            <br />
            and software development
            <br />
            using various programming languages and related tools and frameworks
            <br />
            to solve clients’ business problems as a Programmer
            <br />
            Offering critical thinking and strong interpersonal skills,
            <br />
            <br />
            <br />
            <br />
          </p>
          <p>
            <h2>Experience :</h2>
            Three year experience of programming depend on different
            technologies: <br />
            Python, Nodejs, Solidty, mySql
          </p>
          <br />
          <br />
          <br />
          <p>
            <h2>Educational crouses :</h2>
            100 Days of Code: The Complete Python | udemy by Dr. Angela Yu,
            <br />
            Ethereum and Solidity: The Complete Developer's Guide | udemy by
            Stephen Grider
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </p>
        </div>
      </div>
    </>
  );
}

export default Resume;
