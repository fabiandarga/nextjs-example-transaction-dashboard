import React from 'react';
import User from '../molecules/User';

export default function Navigation() {
    return (
        <div className="navigation">
            <User firstName='John' lastName='Doe' />
        </div>
    )
}