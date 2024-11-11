import { useState, useEffect } from "react";

const useFetch = (url, method = "GET", options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://abc-college-backend-76ka.vercel.app/${url}`, {
          method,
          headers: {
            "Content-Type": "application/json",
            ...options.headers, // Custom headers if provided
          },
          ...options,
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        // If the response has body content, parse it; handle empty responses for DELETE, etc.
        const result = response.status !== 204 ? await response.json() : null;
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Avoid calling fetch on mount if method isn't GET
    if (method === "GET") {
      fetchData();
    }
  }, [url, method, JSON.stringify(options)]); // Only re-fetch if `url`, `method`, or `options` change

  // Return the `fetchData` function for manual fetch calls (e.g., POST, PUT, DELETE)
  const refetch = async (customOptions = {}) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(` https://abc-college-backend-76ka.vercel.app/${url}`, {
        method,
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        ...options,
        ...customOptions,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const result = response.status !== 204 ? await response.json() : null;
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, refetch };
};

export default useFetch;
