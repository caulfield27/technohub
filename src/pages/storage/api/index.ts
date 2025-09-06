import { apiUrl, request } from "@/shared/api/api.config";
import type { Storage } from "./types";

export async function getStorages() {
  try {
    const response = await request.get(apiUrl.warehouse);
    const data: Storage[] = await response?.data?.res;
    return data;
  } catch (e) {
    console.error(e);
  }
}
