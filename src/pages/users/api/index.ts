import { request } from "@/shared/api/api.config";
import type { IUserItem } from "./types";


export async function getUsers(url: string) {
    try {
        const usersResponse = (await request.get(url)).data;
        return usersResponse?.res as IUserItem[];
    } catch (e) {
        console.error(e);
        throw e;
    }
}