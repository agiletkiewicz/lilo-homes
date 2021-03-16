import React from 'react';
import Image from 'next/image';

export default function NavBar({ content }) {
    return (
        <nav className="flex lg:justify-between sticky top-0 bg-white z-10"> 
            <div className="pl-2 lg:justify-left"><Image src='/logo.png' width="100" height="72"/></div>
            <div className="pr-3 pt-6 lg:hidden"><Image src='/menu.png' width="40" height="30"/></div>
            <ul className="hidden lg:flex lg:justify-right font-heading text-lg">
                <li className="p-6">Home</li>
                <li className="p-6">Bungalow</li>
                <li className="p-6">Location</li>
                <li className="p-6">About</li>
            </ul>
        </nav>
    )
};

