import { request, apiUrl } from "@/shared/api/api.config";

export async function createBatch(payload: any) {
  try {
    const response = await request.post(
      apiUrl.batchNew ?? "/batch/new",
      payload
    );
    return response?.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
