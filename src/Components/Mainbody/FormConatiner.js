import React from "react";

import styled from "styled-components";
import "../../Components/Mainbody/Form.css";
import { UseDataLayer } from "../../Contexts/Context";

const Formitem = styled.div`
  height: 100%;
`;

export const Button = styled.button`
  position: ${({ position }) => position && position};
  bottom: ${({ bottom }) => bottom && bottom};
  right: ${({ right }) => right && right};
  padding: ${({ padding }) => padding && padding};
  border: none;
  border-radius: 5px;
  background: ${({ background }) => background && background};
  float: ${({ float }) => float && float};
  margin: ${({ margin }) => margin && margin};
`;
function FormConatiner() {
  const {
    setList,
    checkText,
    setShow,
    setCheckText,
    EmailField,
    setEmailField,
    PhoneField,
    setPhoneField,
    NameField,
    TextField,
    setTextField,
    setNameField,
  } = UseDataLayer();

  const HandleFeilds = (e) => {
    e.preventDefault();

    const Data = [TextField, PhoneField, EmailField, checkText, NameField];

    if ((TextField && NameField && PhoneField, EmailField)) {
      setList((oldData) => [...oldData, Data]);
      setEmailField("");
      setNameField("");
      setPhoneField("");
      setTextField("Hello");
      setCheckText(null);
      setShow(true);
    }
  };
  

  return (
    <form onSubmit={HandleFeilds} className="container form ">
      <Formitem className="formItems1">
        <div>
          <label htmlFor="Textfield">Text Field</label> <br />
          <input
            required
            value={TextField}
            onChange={(e) => setTextField(e.target.value)}
            type="text"
            name="textfield"
            id="Textfield"
          />
        </div>
        <div>
          <label htmlFor="Phonefield">Phone Field</label> <br />
          <input
            required
            value={PhoneField}
            type="text"
            onChange={(e) => setPhoneField(e.target.value)}
            minLength="10"
            maxLength="10"
            name="Phonefield"
            id="Phonefield"
          />
        </div>
        <div>
          <label htmlFor="Name">Name</label> <br />
          <input
            required
            value={NameField}
            onChange={(e) => setNameField(e.target.value)}
            type="text"
            name="name"
            id="Name"
          />
        </div>
      </Formitem>
      <Formitem className="formItems2">
        <div className="div">
          <label htmlFor="Email">Email Field</label> <br />
          <input
            required
            value={EmailField}
            onChange={(e) => setEmailField(e.target.value)}
            type="email"
            name="email"
            id="Email"
          />
        </div>
        <div className="radio">
          <p>Radio button</p>
          <div>
            <input
              onChange={(e) => setCheckText(e.target.value)}
              name="radio"
              value="Excellent"
              type="radio"
            />
            <label htmlFor="Radio">Excellent</label>

            <input
              onChange={(e) => setCheckText(e.target.value)}
              value="Good"
              name="radio"
              type="radio"
            />
            <label htmlFor="Radio">Good</label>

            <input
              value="Fair"
              onChange={(e) => setCheckText(e.target.value)}
              name="radio"
              type="radio"
            />
            <label htmlFor="Radio">Fair</label>

            <input
              value="Bad"
              onChange={(e) => setCheckText(e.target.value)}
              name="radio"
              type="radio"
            />
            <label htmlFor="Radio">Bad</label>
          </div>
        </div>
        <Button
          background=" #48a44c"
          bottom="50px"
          right="30px"
          padding="10px 40px"
          position="absolute"
          type="submit"
        >
          submit
        </Button>
      </Formitem>
    </form>
  );
}

export default FormConatiner;
