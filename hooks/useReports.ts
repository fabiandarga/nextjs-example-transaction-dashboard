import { useEffect, useState } from "react";
import reportsApi, { type Report } from "../api/reports-api";

export default function useReports(from: string, to: string, projectId: string, gatewayId: string): Report[] {
    const [reports, setReports] = useState<Report[]>([]);

    useEffect(() => {
        const pId = projectId === 'all' ? undefined : projectId;
        const gId = projectId === 'all' ? undefined : gatewayId;
        reportsApi.fetchReports(from, to, pId, gId).then((results) => {
            setReports(results)
        }).catch((error) => {
            console.log(error); // TODO add proper logging & UI output
        })
    }, [projectId, gatewayId, from, to]);

    return reports;
}