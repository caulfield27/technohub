import {request} from "../../../shared/api/api.config";

export async function getStats(api: string){
    try{
        const response = (await request(api)).data;
        return response?.statistics;
    }catch(e){
        throw e;
    }
}