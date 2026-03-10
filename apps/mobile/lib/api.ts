import { createApiClient } from "@packages/utils";
import { API_URL } from "@env"

if (!API_URL) {
  throw new Error("API_URL is not defined in .env");
}

export const api = createApiClient(API_URL, false);