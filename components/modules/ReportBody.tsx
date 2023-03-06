import React from 'react';
import { EnrichedReport } from '../../types/entities';
import Card from '../atoms/Card';
import DataGrid from '../molecules/DataGrid';
import style from './reportBody.module.scss';

type Option = { label: string, value: any };

interface ReportBodyProps {
    reports: EnrichedReport[],
    projectFilter: Option;
    gatewayFilter: Option;
}

export default function ReportBody({ reports, projectFilter, gatewayFilter }: ReportBodyProps) {
    return (
        <Card>
            <div className={ style.reportBody }>
                <h3>{projectFilter.label} | {gatewayFilter.label}</h3>
                <DataGrid
                    data={ reports }
                    fields={(row) => [row.created, row.project.name, row.gateway.name, row.amount]}
                    header={["Date", "Project", "Gateway", "Amount"]}
                />
            </div>
        </Card>
    )
}