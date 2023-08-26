import { useEffect, useState } from "react";

import axios from "axios";

export const useFetch = (endpoint, params) => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState();
  const [error, setError] = useState();

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...params },
    headers: {
      "X-RapidAPI-Key": "64ace71899msh8537b66ec114372p16cec5jsnae5338ca79ee",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.request(options);
      const { data } = await response.data;
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setLoading(true);
    fetchData();
  };

  return { data, isLoading, refetch, error };
};
