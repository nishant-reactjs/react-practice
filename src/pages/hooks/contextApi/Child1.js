import React, { createContext } from "react";
import Child2 from "./Child2";

// ContextApi:
// 	Is use to solve a problem of prop drilling
// 	create, provide, Consumer
// 	Consmer only accept funtion so if multiple contextApi will be give problem 
//  and solution of this problem is useContext hook

const data = createContext();
const data2 = createContext();

// useContext Hook

const Child1 = () => {
  const name = "NISHANT";
  const gender = "MALE";

  return (
    <div>
      <data.Provider value={name}>
        <data2.Provider value={gender}>
          <Child2 />
        </data2.Provider>
      </data.Provider>
    </div>
  );
};

export default Child1;
export { data, data2 };
