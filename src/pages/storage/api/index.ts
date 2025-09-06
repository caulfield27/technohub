import { apiUrl, request } from "@/shared/api/api.config";
import type { Storage } from "./types";

export async function getStorages(url: string) {
  try {
    const response = await request.get(url);
    const data: Storage[] = await response?.data?.res;
    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function createWarehouse(payload: {
  name: string;
  address: string;
  user_id: number;
}) {
  try {
    const response = await request.post(apiUrl.createWarehouse, payload);
    return response?.data;
  } catch (e) {
    console.error(e);
  }
}
