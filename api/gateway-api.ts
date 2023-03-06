import { Gateway } from "../types/entities";
import baseApi from "./baseApi";


async function fetchGateways(): Promise<Gateway[]> {
    const payload = await baseApi.get('/gateways');
    if (payload.code != "200") {
        throw new Error("could not fetch projects: " + payload.error);
    }
    return payload.data;
}

export default {
    fetchGateways,
};