import React from 'react';
import User from '../molecules/User';
import style from './navigation.module.scss';
import Logo from './logo.png'
import Image from 'next/image'

export default function Navigation() {
    return (
        <div className={style.navigation}>
            <div>
                <Image src={ Logo } alt="Company Logo" className={ style.logo } />
            </div>
            <User firstName='John' lastName='Doe' />
        </div>
    )
}