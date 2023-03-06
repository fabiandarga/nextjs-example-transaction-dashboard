import baseApi from "./baseApi";

export interface Report {
    paymentId: string;
    projectId: string,
    userIds: string[];
    gatewayIds: string[];
    amount: number;
    modified: string;
    created: string;
}

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