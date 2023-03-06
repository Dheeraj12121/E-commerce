import React, { useReducer } from 'react'

const initalState = {
    firstName:'',
    lastName:'',
    password:'',
    repeatPassword:'',
    email:''
};

const reducer = (state,action) =>{ 
    switch (action.type) {
        case 'changeValue':
            return {...state,[action.field]: action.value};
    
        default:
            throw new Error();
    }
}

const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initalState)
  return (
    <div>
        <form action=""></form>
    </div>
  )
}

export default UseReducer