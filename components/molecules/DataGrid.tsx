import React from 'react';
import style from "./data-grid.module.scss";

interface DateGrindProps<T> {
    data: T[];
    fields: string[] | ((row: T) => any[]);
    header: string[];
}

export default function DataGrid<T>({ data, fields, header }: DateGrindProps<T>) {
    const variables = { '--columns': header.length } as React.CSSProperties;
    return (
        <div className={style.dataGrid} style={variables}>
            <div className={style.head}>
                {header.map(title => <div key={title}>{title}</div>)}
            </div>
            {data.map((row, idx) => {
                return (
                    <div key={idx} className={style.row}>
                        {
                            typeof (fields) === 'function' ?
                                fields(row).map((col, kdx) => (<div key={kdx}>{col}</div>)) :
                                fields.map(col => (<div key={row[col]}>{row[col]}</div>))
                        }
                    </div>
                );
            })}
        </div>
    )
}