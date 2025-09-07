import { request } from "@/shared/api/api.config";
import type { IProduct } from "@/shared/types/products";

export async function getProducts(url: string) {
    try {
        const productResponse = (await request.get(url)).data;
        return productResponse as IProduct[];
    } catch (e) {
        console.error(e);
        throw e;
    }
};
export async function orderProducts(url: string, products: any) {
    try {
        await request.post(url, products)
    } catch (e) {
        console.error(e);
        throw e;
    }
}