import React, { useState } from 'react';
import ReportBody from '../components/modules/ReportBody';
import PageTitle from '../components/molecules/PageTitle';

function Reports() {
    const [projectFilter, setReportFilter] = useState({ label: 'All project', value: 'all' });
    const [gatewayFilter, setGatewayFilter] = useState({ label: 'All gateways', value: 'all' });

    
    return (
        <div>
            <PageTitle title="Reports" subTitle="Easily generate a report of your transactions">
                Test
            </PageTitle>
            <ReportBody projectFilter={projectFilter} gatewayFilter={gatewayFilter} />
        </div>
    )
}

export default Reports
