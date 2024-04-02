import React, { useEffect, useState } from "react";
import axios from "axios";

const json1 = "https://jsonplaceholder.typicode.com/posts";
const json2 = "https://jsonplaceholder.typicode.com/";

const TwoApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    // const json1 = "https://jsonplaceholder.typicode.com/posts";
    // const json2 = "https://jsonplaceholder.typicode.com/";

    const getJson1 = axios.get(json1);
    const getJson2 = axios.get(`${json2}users/`);

    axios.all([getJson1, getJson2]).then(
      axios.spread((...allData) => {
        const jsondata1 = allData[0];
        const jsondata2 = allData[1];
        setData(jsondata2.data);
        setLoading(false);
        console.log("jsondata1", jsondata1.data);
        console.log("jsondata2", jsondata2.data);
      })
    );
  }

  // <--------------- Fetch with 2 Different Function ------------->

  // const getData = () => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((json) => console.log(json))
  //     .catch((e) => console.log(e));
  // };

  // const getData2 = () => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((json) => console.log(json))
  //     .catch((e) => console.log(e));
  // };
  // useEffect(() => {
  //   getData();
  //   getData2();
  // }, []);

  return (
    <>
        {!loading ? (
          <>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>No.</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Username</th>
                  <th scope='col'>Email</th>
                  <th scope='col'>Phone</th>
                  <th scope='col'>website</th>
                </tr>
              </thead>
              <tbody>
                {data.map((value, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{value.name}</td>
                      <td>{value.username}</td>
                      <td>{value.email}</td>
                      <td>{value.phone}</td>
                      <td>{value.website}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        ) : (
          "Loading..."
        )}
    </>
  );
};

export default TwoApi;
