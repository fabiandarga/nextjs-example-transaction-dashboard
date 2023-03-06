import React, { useState } from 'react';
import ReportBody from '../components/modules/ReportBody';
import ReportFilterBar from '../components/modules/ReportFIlterBar';
import PageTitle from '../components/molecules/PageTitle';
import useGateways from '../hooks/useGateways';
import useProjects from '../hooks/useProjects';
import useReports from '../hooks/useReports';
import { EnrichedReport } from '../types/entities';

function Reports() {
    const [projectFilter, setReportFilter] = useState({ label: 'All project', value: 'all' });
    const [gatewayFilter, setGatewayFilter] = useState({ label: 'All gateways', value: 'all' });
    const projects = useProjects();
    const gateways = useGateways();
    const reports = useReports("2021-01-01", "2021-12-31", projectFilter.value, gatewayFilter.value);
    
    const enrichedReports: EnrichedReport[] = reports.map(report => ({
        ...report,
        gateway: gateways.find(gateway => report.gatewayId === gateway.gatewayId),
        project: projects.find(project => report.projectId === project.projectId)
    })).sort((report1, report2) => report1.project.name > report2.project.name ? 1 : -1);

    return (
        <div>
            <PageTitle title="Reports" subTitle="Easily generate a report of your transactions">
                <ReportFilterBar />
            </PageTitle>
            {
                !reports || reports.length === 0 ?
                (<div>Loading...</div>) : 
                <ReportBody reports={enrichedReports} projectFilter={projectFilter} gatewayFilter={gatewayFilter} />
            }
        </div>
    )
}

export default Reports
