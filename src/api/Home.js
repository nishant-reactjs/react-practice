import React from "react";
import { useState } from "react";
import ApiHandler from "./ApiHandler";
import { demo } from "./ApiHandler";

const Home = () => {
  const [pcrValue, setPcrValue] = useState([]);
  ApiHandler.getNse().then((response) => {
    const sum = response.data.filtered.CE.totOI;
    const sum2 = response.data.filtered.PE.totOI;
    const PCR = sum2 / sum;
    console.log(demo);
    setPcrValue(PCR);
  });
  ApiHandler.getData();

  return <div>{demo}</div>;
};

export default Home;
