import React, { ReactNode } from 'react';
import style from "./page-title.module.scss";

interface PageTitleProps { title: string, subTitle: string, children: ReactNode };

export default function PageTitle({ title, subTitle, children }: PageTitleProps) {
    return (
        <div className={ style.pageTitle }>
            <div>
                <h2>{ title }</h2>
                <p>{ subTitle }</p>
            </div>
            <div>
                { children }
            </div>
        </div>
    )
}