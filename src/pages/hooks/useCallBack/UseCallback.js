import React, { useCallback, useEffect, useRef, useState } from "react";
import ChildA from "./ChildA";
import useApi from "../custom/UseApi";

const UseCallback = () => {
  const [count, setCount] = useState(1);
  const [value, setValue] = useState(50);

  const ref = useRef(0);
  useEffect(() => {
    ref.current++;
  });

  const handleChange = useCallback((value) => {
    setCount(count + value);
    console.log(count + value, value);
  }, [count]);

  const apiUrl = "https://fakestoreapi.com/products/" + count;
  const { data, loading, error } = useApi(apiUrl);

  return (
    <div className='App' style={{ padding: "10px" }}>
      <h3>Render count: {ref.current}</h3>
      <ChildA count={count} handleChange={handleChange} />
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <h3>{value}</h3>
      <button onClick={() => setValue(value - 2)}>Reduce</button>

      {/* example of custom hook useFetch */}
      <div>
        <h1>Data from API:</h1>
        {!loading ? (
          <>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            {error && (
              <>
                <p style={{color: 'red'}}>{error.message}</p>
              </>
            )}
          </>
        ) : (
          "loading.."
        )}
      </div>
    </div>
  );
};

export default UseCallback;
