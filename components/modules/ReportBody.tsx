import React from 'react';
import Card from '../atoms/Card';
import style from './report-body.module.scss';

type Option = { label: string, value: any };

interface ReportBodyProps {
    projectFilter: Option;
    gatewayFilter: Option;
}

export default function ReportBody({ projectFilter, gatewayFilter }: ReportBodyProps) {
    return (
        <Card>
            <div className={ style.reportBody }>
                <h3>{projectFilter.label} | {gatewayFilter.label}</h3>

            </div>
        </Card>
    )
}