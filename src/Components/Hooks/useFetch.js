import { useState, useCallback } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const fetchData = useCallback(async (url, options) => {
    setLoading(true);

    let json;
    try {
      const response = await fetch(url, options);
      json = await response.json();
      setLoading(false);
    } catch (error) {
      json = null;
      setError(error);
      setLoading(false);
    } finally {
      setData(json);
    }
  }, []);

  return { loading, error, data, fetchData };
};

export default useFetch;
