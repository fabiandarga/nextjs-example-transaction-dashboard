import { useEffect, useState } from "react";

export default function useReportTitle(projectFilter: string, gatewayFilter: string): string {
    const [title, setTitle] = useState('');

    useEffect(() => {
        
    }, [projectFilter, gatewayFilter]);

    return title;
}