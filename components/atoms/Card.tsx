import React, { ReactNode } from 'react';
import style from "./card.module.scss";

interface CardProps {  children: ReactNode };

export default function Card({ children }: CardProps) {
    return (
        <div className={ style.card }>
            { children }
        </div>
    )
}