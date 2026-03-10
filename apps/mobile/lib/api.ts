import { createApiClient } from "@packages/utils";

const baseURL = process.env.API_URL;

if (!baseURL) {
  throw new Error("API_URL is not defined");
}

export const api = createApiClient(baseURL, false);