export const endpoint =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_ENDPOINT
    : process.env.REACT_APP_ENDPOINT_PROD;
