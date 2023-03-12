import React, { createContext, useContext } from "react";

import Form from "./Form";

const App = () => {
  const submit = values => {
    console.log("submit", values);
  };
  const { state, handleChange, handleSubmit } = Form(submit); // add validation func, initState as argum
  // console.log(state);

  return (
    // <LoginContext.Provider value={{state, handleChange}}>
    <div className="container">
      <h1 className="heading">Login Form</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-container">
          <input
            state={state}
            handleChange={handleChange}
            name="email"
            label="E-mail"
          />
          <input
            state={state}
            handleChange={handleChange}
            name="password"
            label="Password"
          />
          <button type="submit" className="submit-btn">
            Log In
          </button>
        </div>
      </form>
      <p>{}</p>
    </div>
    // </LoginContext.Provider>
  );
};

// const LoginContext = createContext({state, handleChange});

export default App;

const input = ({ name, label, state, handleChange }) => {
  // const {state, handleChange} = useContext(LoginContext);
  return (
    <label>
      {label}
      <input
        type={name}
        placeholder={name}
        name={name}
        value={state.input[name]}
        onChange={handleChange}
      />
      <span className="validation-errors">{state.validationErrs[name]}</span>
    </label>
  );
};
