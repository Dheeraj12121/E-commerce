import React, { useReducer } from "react";
import styled from "styled-components";

const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: blue;
  margin-left: 5px;
  height: 20px;
  

  &:hover {
    box-shadow: 1px 2px 3px 2px black;
  }

  span{
    color: white;

    .b{
        color: blue;
    }
    
  }
`;

const Head = styled.h2`
background-color: ${({bg}) => bg};


`

const initalState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };
    case "dec":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};
 

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <div>
      <h1>hh</h1>
      <p>{state.count}</p>
      <Button onClick={() => dispatch({ type: "inc" })}>+</Button>
      <Button onClick={() => dispatch({ type: "dec" })}>- <span>plus <b className="b">inc</b></span></Button>
      <Head bg='red'>styled</Head>
    </div>
  );
};

export default UseReducer;
