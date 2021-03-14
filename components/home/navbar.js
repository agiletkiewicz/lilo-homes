import React from 'react';
import Image from 'next/image';

export default function NavBar({ content }) {
    return (
        <nav className="flex justify-between"> 
            <div><Image src='/logo.png' width="75" height="54"/></div>
            <div className="pr-3 pt-3"><Image src='/menu.png' width="40" height="30"/></div>
        </nav>
    )
};

