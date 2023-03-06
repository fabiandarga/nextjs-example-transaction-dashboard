import React, { ReactNode } from 'react';
import style from './button.module.scss'

type ButtonVariant = 'primary' | 'secondary';
interface ButtonProps { iconSlot?: ReactNode,  children: ReactNode, variant?: ButtonVariant };

export default function Button({ children, iconSlot, variant = 'primary' }: ButtonProps) {

    return (
        <div className={`${style.button} ${style[variant]}`}>
            <span>{ children }</span>
            { iconSlot !== undefined && iconSlot }
        </div>
    )
}