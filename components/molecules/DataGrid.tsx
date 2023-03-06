import React from 'react';
import style from "./data-grid.module.scss";

type RowData = { [key: string] : any };

export default function DataGrid({ data, fields, header }: { data: RowData[], fields: string[], header: string[] }) {
    const variables = { '--columns': fields.length } as React.CSSProperties;
    return (
        <div className={ style.dataGrid } style={variables}>
            <div className={ style.head }>
                {header.map(title => <div key={title}>{title}</div>)}
            </div>
            {data.map((row, idx) => {
                return (
                    <div key={idx} className={ style.row }>
                        { fields.map(col => (<div key={row[col]}>{row[col]}</div>)) }
                    </div>
                );
            })}
        </div>
    )
}