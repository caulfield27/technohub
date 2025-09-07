import { request } from "@/shared/api/api.config";



export async function getOrders(url: string) {
    try {
        const orderResponse = (await request.get(url)).data;
        return orderResponse.res
    } catch (e) {
        console.error(e);
        throw e;
    }
};