import { useEffect, useState, useContext, createContext } from "react";

export const Contexts = createContext();

const GetListItems = () => {
  let Lists = localStorage.getItem("list");

  if (Lists) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};
const ContextDataLayer = ({ children }) => {
  const [active, setActive] = useState(0);
  const [TextField, setTextField] = useState("Hello");
  const [PhoneField, setPhoneField] = useState("");
  const [EmailField, setEmailField] = useState("");
  const [checkText, setCheckText] = useState("");
  const [NameField, setNameField] = useState("");
  const [List, setList] = useState(GetListItems([]));
  const [show, setShow] = useState(false);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(List));
  }, [List]);

  return (
    <Contexts.Provider
      value={{
        active,
        setActive,
        List,
        setList,
        show,
        setShow,
        checkText,
        setCheckText,
        EmailField,
        setEmailField,
        PhoneField,
        setPhoneField,
        TextField,
        setTextField,
        NameField,
        setNameField,
      }}
    >
      {children}
    </Contexts.Provider>
  );
};

export default ContextDataLayer;

export const UseDataLayer = () => useContext(Contexts);
