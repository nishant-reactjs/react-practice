// src/components/InfiniteScrollList.js

import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const InfinityScroll = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const fetchItems = async () => {
    // Simulate fetching data from an API
    const response = await fetch(`https://api.example.com/items?page=${page}`);
    const data = await response.json();

    setItems((prevItems) => [...prevItems, ...data]);
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchItems();
  }, []); // Fetch initial data

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchItems}
      hasMore={true} // Set to true if there are more items to load
      loader={<h4>Loading...</h4>}
    >
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </InfiniteScroll>
  );
};

export default InfinityScroll;
