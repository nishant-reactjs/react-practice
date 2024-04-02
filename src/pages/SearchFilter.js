import React, { useState, useEffect } from "react";

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [post, setPost] = useState([]);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => {
        setPost(json);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <input
        placeholder='Search...'
        type='text'
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <p>
        {post
          .filter((val, key) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <div key={key}>
                <p>{val.title}</p>
                {/* <p>{searchTerm ? val.title : ''}</p> */}
              </div>
            );
          })}
      </p>
    </div>
  );
};

export default SearchFilter;
