import React from 'react';
import Image from 'next/image'

export default function NavBar({ content }) {
    return (
        <nav className="flex justify-between"> 
            <div><Image src='/logo.png' width="75" height="54"/></div>
            <div><Image src='/menu.png' width="25" height="25"/></div>
        </nav>
    )
};