import React from 'react';
import Image from 'next/image';

export default function Card({ content }) {
    return (
        <div className="relative mt-6 mb-3">
            <img src={content.image[0].url} className="" />
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-grey opacity-60"></div>
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-neutral m-auto h-6 w-28 text-center">
                     <p className="">{content.heading}</p>
                 </div>
        </div>
    )
};