import { useEffect, useState } from "react";

const useFetch = (initialUrl) => {
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();

        setData(json);
        setError(null);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };

    if (url) {
      fetchData();
    }
  }, [url]);

  return { isLoading, error, data, setUrl };
};

export default useFetch;
