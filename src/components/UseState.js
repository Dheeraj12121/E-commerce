import React, { useState } from "react";

const UseState = () => {
  // const [changeName, setChangeName] = useState("Dheeraj");

  // const Name = () => {
  //   setChangeName('kumar')
  // }

  // const Name = () => {
  //   let val = changeName;

  //   if (val === "Dheeraj") {
  //     setChangeName("kumar");
  //   } else {
  //     setChangeName("Dheeraj");
  //   }
  // };

  // const Name = () => {
  //   let val = changeName;
  //   (val === "Dheeraj") ? setChangeName("Kumar") : setChangeName("Dheeraj");
  // }

  // BioData
  const bioData = [
    {
      id: 0,
      myName: "vinod",
      age: 26,
    },
    {
      id: 1,
      myName: "thapa",
      age: 27,
    },
  ];

  const [myArray, setMyArray] = useState(bioData);

  const clear = () => {
    setMyArray([]);
  };

  const removeElm = (id) => {
     const myNewArray = myArray.filter((curElem) => {
      return curElem.id !== id
     })

     setMyArray(myNewArray)
  }
  // Spread Operator
  // const [myObject, setMyObject] = useState({
  //   myName:"Dheeraj Kumar", myAge:18 ,degree:"BCA"
  // })

  // const changeObject = () => {
  //   setMyObject({... myObject ,myName:"Thapa"})
  // }

  return (
    <div>
      {myArray.map(({curElem }) => {
        return (
          <h1>
            {curElem.myName} & {curElem.age} 
            <button onClick={() => removeElm(curElem.id)}>Remove</button>
          </h1>
        );
      })}
      <button onClick={clear}>clear</button>

      {/* Spread Operator */}
      {/* <h1>
        {myObject.myName} {myObject.myAge} {myObject.degree}
      </h1>
      <button onClick={changeObject}>update</button> */}
    </div>
  );
};

export default UseState;
