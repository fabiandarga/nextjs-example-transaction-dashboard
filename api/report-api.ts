import { Report } from "../types/entities";
import baseApi from "./baseApi";

async function fetchReports(from: string, to: string, projectId?: string, gatewayId?: string): Promise<Report[]> {
    const payload = await baseApi.post('/report', {
        from,
        to,
        projectId,
        gatewayId,
    });

    if (payload.code != "200") {
        throw new Error("could not fetch reports: " + payload.error);
    }

    return payload.data;
}

export default {
    fetchReports
};