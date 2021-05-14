import React from 'react';

export default function Footer({ }) {
    return (
        <div className="h-14 bg-white flex justify-between ml-5 mr-5 lg:ml-10 lg:mr-10 mt-5">
            <p className="font-body text-xs lg:text-s">Copyright 2021 Stacey Smith</p>
            <p className="font-body text-xs lg-text-s">Handcrafted by <a href="https://www.agiltanner.com" className="text-main-blue hover:underline">Agi</a></p>
        </div>
    )
};