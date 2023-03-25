import axios from "axios";
import React, { useState, useEffect } from "react";

export function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get<T>(url);
        if (isMounted) {
          setData(response.data);
        }
      } catch (error) {
        setError(error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, isLoading, error };
}
