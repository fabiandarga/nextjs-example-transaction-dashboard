import React from 'react';
import style from "./user.module.scss";

export default function User({ firstName, lastName }: { firstName: string, lastName: string }) {
    const initials = `${firstName[0]}${lastName[0]}`;
    return (
        <div className={ style.user }>
            <div className={ style.userPicto }>{ initials }</div>
            <p>{ firstName } { lastName }</p>
        </div>
    )
}