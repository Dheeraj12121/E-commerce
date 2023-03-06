import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

function reducer(state, action) {
    switch (action) {
        case "inc":
          return { count: state.count + 1 };
        case "dec":
          return { count: state.count - 1 };
          default : 
          return state
      }
    }

const UseState1 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [stateTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <div className="one">
        <p>{state.count}</p>
        <button onClick={() => dispatch("inc")}>+</button>
        <button onClick={() => dispatch("dec")}>-</button>
      </div>

      <br />
      <br />
      <br />

      <div className="two">
        <button onClick={() => dispatchTwo("inc")}>+</button>
        <p>{stateTwo.count}</p>
        <button onClick={() => dispatchTwo("dec")}>-</button>
      </div>
    </div>
  );
};

export default UseState1;
