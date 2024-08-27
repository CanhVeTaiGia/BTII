import axios, { AxiosResponse } from "axios";
import React from "react";

interface Props {
  data?: any;
  errorCode?: number;
}

const fetchData = async () => {
  try {
    const res: AxiosResponse = await axios.get(
      "https://example.com/invalid-endpoint"
    );
    return { data: res.data };
  } catch (err: any) {
    const errorCode = err.response ? err.response.status : 500;
    return { errorCode };
  }
};

const ErrorHandlingPage = async () => {
  const { data, errorCode } = await fetchData();

  if (errorCode) {
    return (
      <div>
        <h1>Error: {errorCode}</h1>
        <p>
          {errorCode === 404
            ? "The resource was not found."
            : errorCode === 500
            ? "Internal server error. Please try again later."
            : "An unexpected error occurred."}
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1>Data fetched successfully</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ErrorHandlingPage;
