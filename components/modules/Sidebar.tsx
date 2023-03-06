import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons/faPowerOff';
import { faChartPie } from '@fortawesome/free-solid-svg-icons/faChartPie';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons/faChartSimple';
import Link from 'next/link'
import React from 'react';
import style from './sidebar.module.scss';
import { useRouter } from 'next/router';

export default function Sidebar() {
    const router = useRouter();

    return (
        <div className={style.sidebar}>
            <Link href="/" className={router.pathname == "/" ? style.active : ""}>
                <FontAwesomeIcon icon={faChartSimple} />
            </Link>
            <Link href="/reports" className={router.pathname == "/reports" ? style.active : ""}>
                <FontAwesomeIcon icon={faChartPie} />
            </Link>
            <Link href="/">
                <FontAwesomeIcon icon={faPowerOff} />
            </Link>
        </div>
    )
}