import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [myNum, setMyNum] = useState(0);
  const [show, setShow] = useState(false);

  const getValue = () => {
    return setMyNum(myNum + 1);
  };

  const countNumber = (num) => {
    for (let i = 0; i < 1000000000; i++) {}
    return num;
  };

  const checkData = useMemo(() => {
    const checkData = countNumber(myNum)
  },[myNum]);

  return (
    <div>
      <button onClick={getValue} >
        counter
      </button>
      <p> my New number{checkData}</p>
      <button onClick={() => setShow(!show)}>
        {show ? "You clicked me" : "Click me plz"}
      </button>
    </div>
  );
};

export default UseMemo;
