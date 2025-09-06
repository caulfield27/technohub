import { apiUrl, request } from "./api.config";
import { useGlobalStore } from "../store/global.store";
import type { User } from "../types/user";


export async function getMe() {
    try{
        const {setUser} = useGlobalStore.getState();
        const meResponse: User = await request.get(apiUrl.getMe);
        setUser(meResponse);
    }catch(e){
        console.error(e);
    }
}