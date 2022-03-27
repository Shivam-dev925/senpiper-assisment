import React from "react";
import styled from "styled-components";
import { UseDataLayer } from "../../Contexts/Context";

const Navigation = styled.nav`
  width: 100%;
  height: 60px;
  box-shadow: 0px 1px 6px grey;
  align-items: center;
`;
const UL = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const LI = styled.li`
  padding: 15px 35px;
  align-items: center;

  font-weight: 600;
  font-size: 20px;
  position: relative;
  &:hover {
    cursor: pointer;
    background: ${({ bgColor }) => bgColor && bgColor};
    &:after {
      animation: slider 0.3s ease-in-out;
      width: 100%;
    }
  }
  &:after {
    transition: all 0.3s ease-in-out;
    position: absolute;
    content: "";
    width: 0%;
    height: 3px;
    background: #702963;
    bottom: 0px;
    left: 0px;
  }
  @keyframes slider {
    0% {
      width: 0%;
    }

    100% {
      width: 100%;
    }
  }
`;
function Header() {
  const  {setActive}  = UseDataLayer();

  const listItems = ["Form", "Table"];

  const HandleNavigation = (id) => {
    setActive(id);
  };

  return (
    <Navigation>
      <UL>
        {listItems?.map((item, index) => {
          return (
            <LI
              onClick={() => HandleNavigation(index)}
              bgColor="whiteSmoke"
              key={item}
            >
              {item}
            </LI>
          );
        })}
      </UL>
    </Navigation>
  );
}

export default Header;
