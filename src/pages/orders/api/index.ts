import { request, apiUrl } from "@/shared/api/api.config";
import type { OrderItem } from "../ui/Orsers";

export async function getOrders(url: string) {
  try {
    const response = await request.get(url);
    const data = response?.data;
    const result: OrderItem[] = data?.res ?? data?.orders ?? [];
    return result;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function updateOrderStatus(orderId: string, status: string) {
  try {
    const url = `${apiUrl.orderUpdate}?status=${encodeURIComponent(
      status
    )}&order_id=${encodeURIComponent(orderId)}`;
    const response = await request.put(url);
    return response?.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
