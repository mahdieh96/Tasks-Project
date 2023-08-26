import { useCallback, useState } from "react";

export const useHttp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(requestConfig.url, {
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
      });

      if (!response.ok) throw new Error("sth is wrong!!");
      const data = await response.json();
      applyData(data);
    } catch (error) {
      setError(error.message || "sth went wrong");
    }
    setIsLoading(false);
  }, []);
  return {
    isLoading: isLoading,
    error: error,
    sendRequest: sendRequest,
  };
};
