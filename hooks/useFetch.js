import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setIsLoading(true);

      try {
        fetch(url)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setData(data);
            setIsLoading(false);
          });
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { isLoading, error, data };
};

export default useFetch;
