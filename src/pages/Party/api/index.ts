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

export async function getCategories() {
  try {
    const response = await request.get(
      apiUrl.getCategories ?? "/category/get-categories"
    );
    return response?.data?.res ?? response?.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function createCategory(payload: { name: string }) {
  try {
    const response = await request.post(
      apiUrl.createCategory ?? "/category/create-category",
      payload
    );
    return response?.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
