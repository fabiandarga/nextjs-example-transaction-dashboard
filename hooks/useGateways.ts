import { useEffect, useState } from "react";
import gatewaysApi from "../api/gateway-api";
import { Gateway } from "../types/entities";

export default function useReports(): Gateway[] {
    const [gateways, setGateways] = useState<Gateway[]>([]);

    useEffect(() => {
        gatewaysApi.fetchGateways().then((results) => {
            setGateways(results)
        }).catch((error) => {
            console.log(error); // TODO add proper logging & UI output
        })
    }, []);

    return gateways;
}