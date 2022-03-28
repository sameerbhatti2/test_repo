import { makeStyles } from "@mui/styles";
import React from "react";

const useStyle = makeStyles((theme) => ({
  cont_box: {
    maxWidth: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "white",
    textAlign: "left",
    padding: "3vmax",
    [theme.breakpoints.down("sm")]: {
      '& p h4':{fontSize:"1.5vmax"},      '& p h4 a':{wordWrap: "break-word",}
    },
  
  },
  gardent01: {
    background:
      "linear-gradient(29deg, rgba(2,0,36,1) 24%, rgba(69,4,88,1) 71%, rgba(62,57,184,1) 100%)",
  },
}));

const Portflio = () => {
  const classes = useStyle();
  return (
    <div className={`${classes.cont_box} ${classes.gardent01}`}>
      <p>
        <h4>
          This is a portflio landing page for PPC on netlify :<br />
          <a href="https://upbeat-curie-dc2813.netlify.app" target="_blank">
            https://upbeat-curie-dc2813.netlify.app
          </a>
        </h4>
        <br />
        <h4>
          This is an ongoing MERN stack multivendor website :
          <br />
          <a href="https://flexsolutionsbhatti.herokuapp.com/" target="_blank">
            https://flexsolutionsbhatti.herokuapp.com
          </a>
        </h4>
        <br />
        <h4>
          This is Google keep clone for notes :
          <br />
          <a
            href="https://wizardly-einstein-9b16eb.netlify.app"
            target="_blank"
          >
            https://wizardly-einstein-9b16eb.netlify.app
          </a>
        </h4>
        <br />
        <h4>
          This is a celcius to farenheit converter in JS :
          <br />
          <a
            href="https://relaxed-nightingale-03d4e5.netlify.app"
            target="_blank"
          >
            https://relaxed-nightingale-03d4e5.netlify.app
          </a>
        </h4>
      </p>
    </div>
  );
};

export default Portflio;
