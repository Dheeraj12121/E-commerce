import React, { useReducer } from "react";
import styled from "styled-components";

const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
  box-shadow: 1px 2px 3px 2px black;
  margin-left:5px;
  height: 20px;
  
`;

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
      <Button onClick={() => dispatch({ type: "dec" })}>-</Button>
    </div>
  );
};

export default UseReducer;
