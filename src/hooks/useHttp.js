import { useState } from "react";

async function sendHttpResquest(url, config) {
  const response = await fetch(url, config);

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(
      resData.message || "Something went wrong, field to send request"
    );
  }

  return resData;
}

export default function useHttp() {
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  function sendRequest() {
    setIsLoading(true);
    try {
      const resData = sendHttpResquest();
    } catch (error) {
      setError(error.message || "Something went wronng");
    }
    setIsLoading(false);
  }
}
