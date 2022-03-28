import React, { useEffect, useState } from "react";
import axios from "axios";

const Test0 = () => {
  const [adata, setData] = useState(["sam", "sameer"]);
  const [boom, setBoom] = useState();
  const setState = (data) => {
    setBoom("hello");
  };

  const getApid = async (st) => {
    const res = await axios
      .get(`https://hamzakhan2121.github.io/jsonapi/student.json`)
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
    console.log("boomer", res.data);
    const data = res.data.Student;
    setBoom([data]);
    return data;

    // console.log("2state typeof ======", Object.entries(res.data.Student));
    // return res.data.Student;
  };

  useEffect(() => {
    getApid();
    // setState();
    setData(getApid());
    setData(2);
  }, []);

  console.log("sssssssss------", boom);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* <p>hello</p> */}

      <table>
        <tr>
          <td>| ID |</td>
          <td>LastName |</td>
          <td>FirstName |</td>
          <td>StudentStatus |</td>
          <td>Major |</td>
          <td>Country |</td>
          <td>Age |</td>
          <td>Grade |</td>
          <td>| address |</td>
        </tr>
        {boom &&
          boom[0].map((item, index) => (
            <tr>
              <td>{item.ID}</td>
              <td>{item.LastName}</td>
              <td>{item.FirstName}</td>
              <td>{item.StudentStatus}</td>
              <td>{item.Major}</td>
              <td>{item.Country}</td>
              <td>{item.Age}</td>
              <td>{item.Grade}</td>
              {/* //there is a APi model fault in item.Grade */}
              <td>{`${item.address.street}  ${item.address.City}  ${item.address.State}`}</td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Test0;
