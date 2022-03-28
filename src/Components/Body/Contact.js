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
    
  },
  gardent01: {
    background:
      "linear-gradient(29deg, rgba(2,0,36,1) 24%, rgba(69,4,88,1) 71%, rgba(62,57,184,1) 100%)",
  },
}));

const Contact = () => {
  const classes = useStyle();
  return (
    <div className={`${classes.cont_box} ${classes.gardent01}`}>
      <p>
        <h4>
          Email :
          <br />
          <a
           href="mailto:sameerbhatti@btisoft.com"
          >
           sameerbhatti@btisoft.com
          </a>
        </h4>
        <br />
        <h4>
          Phone and whatsapp :
          <br />
          <a
            href="tel:+923460255803"
          >
           +923460255803
          </a>
        </h4>
        <br />
      </p>
    </div>
  );
};

export default Contact;
