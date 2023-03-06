import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from '../components/atoms/Button';
import PageTitle from '../components/molecules/PageTitle';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons/faHouseUser';
import style from './index.module.scss';

function HomePage() {
    return (
        <div>
            <PageTitle title="Dashboard" subTitle="Custom View for you">
                <Button iconSlot={<FontAwesomeIcon icon={faPlus} />}>Add Widget</Button>
            </PageTitle>
            <div className={style.welcomeMessage}>
                
                <p className={style.icon}>
                    <FontAwesomeIcon icon={faHouseUser} />
                </p>
                <p>Welcome to your Bunny Reporting Tool</p>
                <p>Add widgets to customize your dashboard</p>
            </div>
        </div>
    )
}

export default HomePage
