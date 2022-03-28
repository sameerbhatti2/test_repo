import { makeStyles } from "@mui/styles";
import axios from "axios";
import loader from "../img/Dual Ring-loader.gif";
import React, { useEffect } from "react";
import { useState } from "react";

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
    wordWrap: "break-word",
    [theme.breakpoints.down("sm")]: {
      "& div h4": { fontSize: "1.2vmax", wordWrap: "break-word" },
      "& div": { wordWrap: "break-word" },
      "& div h4 a": { wordWrap: "break-word" },
    },
  },
  gardent01: {
    background:
      "linear-gradient(29deg, rgba(2,0,36,1) 24%, rgba(69,4,88,1) 71%, rgba(62,57,184,1) 100%)",
  },
}));

const GitHub = () => {
  const [repo, setRepo] = useState();

  const getRepo = async (st) => {
    const config = {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    };

    const res = await axios
      .get(`https://api.github.com/users/sameerbhatti2/repos`)
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
    console.log("repo", res.data);
    const data = res.data;
    setRepo(data);
    return data;
  };

  useEffect(() => {
    getRepo();
  }, []);

  console.log(repo);

  const classes = useStyle();
  return (
    <div className={`${classes.cont_box} ${classes.gardent01}`}>
      {repo ? (
        repo.map((item, index) => (
          <div
            key={index}
            style={{ textAlign: "center", wordWrap: "break-word" }}
          >
            {" "}
            <h4 style={{ wordWrap: "break-word" }}>
              {repo[index].description} :
              <br />
              <a href={repo[index].html_url} target="_blank">
                {repo[index].html_url}
              </a>
            </h4>
            <br />
          </div>
        ))
      ) : (
        <img src={loader} />
      )}
    </div>
  );
};

export default GitHub;
