import { request } from "@/shared/api/api.config";
import type { IParty } from "@/shared/types/party";

export async function getParty(url: string) {
    try {
        const partyResponse = (await request.get(url)).data;
        return partyResponse.res.batches as IParty[];
    } catch (e) {
        console.error(e);
        throw e;
    }
}