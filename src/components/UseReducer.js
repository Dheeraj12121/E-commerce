import React from 'react'
import { useReducer } from 'react'

const initialState = 5;

const reducer = (state, action) => {
    console.log(state, action);
    if(action.type === "INCREMENT"){
        return state + 1;
    }
    if(action.type === "DECREMENT"){
        return state -1;
    }
    return state;
}

const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <div>
        <p>{state}</p>
        <div className="">
            <button onClick={() => dispatch({type: "INCREMENT"})}>Inc</button>
            <button onClick={() => dispatch({type: "DECREMENT"})}>Dec</button>
        </div>
    </div>
  )
}

export default UseReducer