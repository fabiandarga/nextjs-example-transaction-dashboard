import React, { useState } from 'react';
import ReportBody from '../components/modules/ReportBody';
import ReportFilterBar from '../components/modules/ReportFIlterBar';
import PageTitle from '../components/molecules/PageTitle';
import useReports from '../hooks/useReports';

function Reports() {
    const [projectFilter, setReportFilter] = useState({ label: 'All project', value: 'all' });
    const [gatewayFilter, setGatewayFilter] = useState({ label: 'All gateways', value: 'all' });
    const reports = useReports("2021-01-01", "2021-12-31", projectFilter.value, gatewayFilter.value);
    
    
    return (
        <div>
            <PageTitle title="Reports" subTitle="Easily generate a report of your transactions">
                <ReportFilterBar />
            </PageTitle>
            {
                !reports || reports.length === 0 ?
                (<div>Loading...</div>) : 
                <ReportBody reports={reports} projectFilter={projectFilter} gatewayFilter={gatewayFilter} />
            }
        </div>
    )
}

export default Reports
