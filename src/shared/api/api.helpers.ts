import { apiUrl, request } from "./api.config";
import { useGlobalStore } from "../store/global.store";
import type { User } from "../types/user";


export async function getMe() {
    try {
        const { setUser } = useGlobalStore.getState();
        const meResponse = await request.get(apiUrl.getMe);
        const data: User = meResponse.data;
        setUser(data);
    } catch (e) {
        console.error(e);
    }
}