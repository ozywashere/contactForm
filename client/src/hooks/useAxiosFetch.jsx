import axios from 'axios';
import { useState, useEffect } from 'react';
const api = axios.create({
  baseURL: 'http://localhost:5500/api/v1',
});
function useAxiosFetch(url) {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const result = await api.get(url);
      const data = result.data.users;
      console.log(data);
      setData(data);
    } catch (error) {
      setIsError(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return { data, isError, isLoading };
}

export default useAxiosFetch;
