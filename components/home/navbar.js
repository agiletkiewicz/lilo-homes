import React from 'react';
import Image from 'next/image';

export default function NavBar({ content }) {
    return (
        <nav className="flex justify-between sticky top-0 bg-white z-10"> 
            <div className="pl-2"><Image src='/logo.png' width="100" height="72"/></div>
            <div className="pr-3 pt-6"><Image src='/menu.png' width="40" height="30"/></div>
        </nav>
    )
};

