import { request } from "@/shared/api/api.config";

export async function getOrders(url: string) {
  try {
    const response = await request.get(url);
    const data = response?.data;
    return data?.orders ?? data?.res ?? [];
  } catch (e) {
    console.error(e);
    throw e;
  }
}
