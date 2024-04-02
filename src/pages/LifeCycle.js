import React, { useEffect, useState } from "react";
import LifeCycle2 from "./LifeCycle2";

const LifeCycle = () => {
  console.log("main function"); /* <-----------    1   ---------------->  */

  const [demo, setdemo] = useState("State");

  const toggleReadMore = () => {
    console.log("Inner Function");
  };

  console.log(demo); /* <-----------    2   ---------------->  */

  useEffect(() => {
    console.log("useEffect"); /* <-----------    5   ---------------->  */
    toggleReadMore(); /* <-----------    6   ---------------->  */
  }, []);
  return (
    <>
      <div>
        {console.log("Return")} {/* <-----------    3   ---------------->  */}
        check console
        <LifeCycle2 />
        {/* <-----------   (whole lifecycle2 will run) 4   ---------------->  */}
      </div>
    </>
  );
};

export default LifeCycle;
