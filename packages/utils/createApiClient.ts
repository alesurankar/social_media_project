import axios, { AxiosInstance } from "axios";

const createApiClient = (
  baseURL: string, withCredentials: boolean): AxiosInstance => {
  const api = axios.create({
    baseURL,
    withCredentials,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return api;
};


export default createApiClient;