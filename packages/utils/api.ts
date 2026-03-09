import axios from "axios";


const DEFAULT_BASE_URL = "http://localhost:4000/api/v1";

const getBaseURL = () => {
  if (typeof process !== "undefined") {
    if (process.env.NEXT_PUBLIC_API_URL) return process.env.NEXT_PUBLIC_API_URL; // Web
    if (process.env.API_URL) return process.env.API_URL; // Mobile
  }
  return DEFAULT_BASE_URL;
};

const api = axios.create({
  baseURL: getBaseURL(),
  withCredentials: true,
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;