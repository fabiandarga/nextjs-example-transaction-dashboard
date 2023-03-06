import React from 'react';
import style from "./table.module.scss";

type RowData = { [key: string] : any };

export default function DataGrid({ data, fields, header }: { data: RowData[], fields: string[], header: string[] }) {
    const variables = { '--columns': fields.length } as React.CSSProperties;
    return (
        <div className={ style.table } style={variables}>
            <div className={ style.tableHead }>
                {header.map(title => <div>{title}</div>)}
            </div>
            {data.map(row => {
                return (
                    <div className={ style.tableRow }>
                        { fields.map(col => (<div>{row[col]}</div>)) }
                    </div>
                );
            })}
        </div>
    )
}