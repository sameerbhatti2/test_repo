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

const Home = () => {
  const classes = useStyle();
  return (
    <div className={`${classes.cont_box} ${classes.gardent01}`}>
      <p>
        <h1>Hi, there wellcome to our site</h1>
        <h4>
          my name is sameer bhatti and this is my portfolio website,
          <br /> to let you know about my work and experience,
          <br /> I am a professional programmer working most popular
          technologies like Python, Solidity, React, Nodejs, Css3.0 for advanced
          level <br /> web and blockchain development,
          <br /> I can make any kind of advanced UI with React, Material UI, and
          Css3.0, and can make backend with all MySQL, NoSQL, Django, and
          express.js, plus smart contracts (ERC20, ERC72) with, web3.py,
          web3.js, Brownie, chainlink
        </h4>
      </p>
    </div>
  );
};

export default Home;
