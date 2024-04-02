import axios from 'axios';
import { useState, useEffect } from 'react';

const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
        await axios.get(url)
        .then((res)=>{
          console.log(res.data);
          setData(res.data);
          setError(null);
        })
        .catch(error=>{
          console.log(error);
          setError(error);

        })
        .finally(()=>{
          setLoading(false);
        })
        
      //   try {
      //   const response = await fetch(url);
      //   const result = await response.json();
      //   console.log('fetch',result);
      //   setData(result);
      // } catch (error) {
      //   setError(error);
      // } finally {
      //   setLoading(false);
      // }
    };

    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};
export default useApi;

// // Example usage in a component
// const MyApiComponent = () => {
//   const apiUrl = 'https://api.example.com/data';
//   const { data, loading, error } = useApi(apiUrl);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   return (
//     <div>
//       <h1>Data from API:</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };

// export default MyApiComponent;
