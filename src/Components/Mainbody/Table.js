import React from "react";
import { H1 } from "./MainBody";
import { Button } from "../Mainbody/FormConatiner";
import { Table } from "react-bootstrap";
import { UseDataLayer } from "../../Contexts/Context";
import "./Table.css";

function TableComponent() {
  const { List, setList } = UseDataLayer();

  const HandleDelete = (id) => {
    console.log(id);
    const updatedList = List?.filter((elem, idx) => idx !== id);
    setList(updatedList);
  };

  
  const TheadItems = [
    "Form Name",
    "Text Field",
    "Phone Field",
    "Email Field",
    "Radio button",
    "Name",
  ];

  return (
    <div className="container-fluid">
      

      <H1 color="#4863A0">All Feedback</H1>
      <Table className="container my-5" bordered>
        <thead style={{ background: "violet" }}>
          <tr>
            {TheadItems?.map((thead, index) => {
              return <th key={index}>{thead}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {List?.length > 0
            ? List.map((item, index) => {
                return (
                  <tr className="tRow" key={index}>
                    <td>{index + 1}</td>
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>
                    <td>{item[2]}</td>
                    <td>{item[3]}</td>
                    <td>
                      {item[4]}{" "}
                     
                      <Button
                        background=" #FF4433"
                        onClick={() => HandleDelete(index)}
                        padding="3px 13px"
                        float="right"
                        margin="0px 10px"
                      >
                        Delete
                      </Button>{" "}
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </Table>
      {List.length === 0 ? (
        <div
          style={{ marginTop: "200px", flexDirection: "column" }}
          className="  container d-flex justify-content-center align-items-center"
        >
          <h1 style={{ color: "" }}>Table is empty</h1>
          <img src="images/empty.png" alt="" />
        </div>
      ) : null}
    </div>
  );
}

export default TableComponent;
