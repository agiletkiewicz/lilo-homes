import React from 'react';
import Image from 'next/image';

export default function NavBar({ content }) {
    return (
        <nav className="flex justify-between sticky top-0 bg-white z-10"> 
            <a href="/"><div className="pl-2 lg:justify-left"><Image src='/logo.png' width="100" height="72"/></div></a>
            <div className="pr-3 pt-6 lg:hidden"><Image src='/menu.png' width="40" height="30"/></div>
            <ul className="hidden lg:flex lg:justify-right font-heading text-lg">
                <a href="/"><li className="p-6">Lilo House</li></a>
                <a href="/bungalow"><li className="p-6">Lilo Bungalow</li></a>
                <li className="p-6">Location</li>
                <li className="p-6">About</li>
            </ul>
        </nav>
    )
};

