import call from "./Command";

export const BASE_URL =
  "https://www.nseindia.com/api/option-chain-indices?symbol=";

export const BANKNIFTY_API = `${BASE_URL}BANKNIFTY`;

export const demo = [];

const getNse = async () => {
  let apiCall = await call({
    path: "",
    method: "get",
  });

  return apiCall;
};

const getData = async () => {
  fetch(BANKNIFTY_API)
    .then((response) => response.json())
    .then((data) => {
      let timestamp = data.records.timestamp;
      demo.push(timestamp);
      // console.log(timestamp);
      return data;
    });
};

export default {
  getNse,
  getData,
};
