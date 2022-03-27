import React from "react";
import TableComponent from "./Table";
import styled from "styled-components";
import { UseDataLayer } from "../../Contexts/Context";
import FormConatiner from "./FormConatiner";
import { Alert } from "react-bootstrap";

const MainBox = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  overflow: hidden;
  overflow-y: scroll;
  background: ${({ bgColor }) => bgColor && bgColor};

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const H1 = styled.h1`
  color: ${({ color }) => color && color};
`;

function MainBody() {
  const { active, setShow, show } = UseDataLayer();

  const paraStyle = {
    color: "black",
    opacity: 0.6,
    letterSpacing: "1px",
    fontSize: "14px",
    fontWeight: 600,
  };

  

  return (
    <>
      {active === 0 ? (
        <MainBox className="container-fluid" bgColor=" #F5F5F5">
          {show?<Alert variant="success" onClose={()=>setShow(false)}  dismissible>
            <em>“Thank 
            you for completing the information”</em>
          </Alert>:null}
          <H1 className="container" color="#4863A0">
            Aromatic Bar
          </H1>
          <p className="container" style={paraStyle}>
            we are committed to providing you with the best dining experience
            possible, so we welcome your comments. Please fill out this
            questionnaire. Thank you
          </p>
          <FormConatiner />
        </MainBox>
      ) : (
        <MainBox bgColor=" #F5F5F5">
          <TableComponent />
        </MainBox>
      )}
    </>
  );
}

export default MainBody;
