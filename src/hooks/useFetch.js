import { useState, useEffect } from "react";
import axios from "axios";
/**
 * Hook to fetch data from a URL.
 *
 * @param {string} url The URL from which to fetch the data.
 *
 * @returns {object} An object containing the following properties:
 *   - data: The fetched data, or null if the fetch has not completed or an error occurred.
 *   - loading: A boolean indicating whether the fetch is currently in progress.
 *   - error: An error object, or null if the fetch was successful.
 */
export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(url, { signal: controller.signal });
        setData(response.data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled:", err.message);
          return;
        }
        setError(err);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}
