import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown';
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar';
import React from 'react';
import style from './reportFilterBar.module.scss';
import Button from '../atoms/Button';

export default function ReportFilterBar() {

    return (
        <div className={style.filterBar}>
           <Button iconSlot={<FontAwesomeIcon icon={faCaretDown} />}>
                All Projects
           </Button>
           <Button iconSlot={<FontAwesomeIcon icon={faCaretDown} />}>
                All Gateways
           </Button>
           <Button iconSlot={<FontAwesomeIcon icon={faCalendar} />}>
                From Date
           </Button>
           <Button iconSlot={<FontAwesomeIcon icon={faCalendar} />}>
                To Date
           </Button>
           <Button variant="secondary">
                Generate Report
           </Button>
        </div>
    )
}