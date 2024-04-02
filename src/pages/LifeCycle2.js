import React, { useEffect, useState } from "react";

const LifeCycle2 = () => {
  console.log("main function2");

  const [demo, setdemo] = useState("State2");

  const toggleReadMore = () => {
    console.log("Inner Function2");
  };
  console.log("State2");

  useEffect(() => {
    console.log("useEffect2");
    toggleReadMore();
  }, []);
  return console.log("return2"), (<div>check console</div>);
};

export default LifeCycle2;
