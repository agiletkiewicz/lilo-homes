import React, { useState } from 'react';

export default function Card({ content }) {

    const [flipped, setFlip] = useState(false);

    if (flipped) return (
        <div className="relative mt-6 mb-3">
            <img src={content.image[0].url} className="" />
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-grey opacity-60"></div>
                <div className="p-2 absolute top-0 bottom-0 left-0 right-0 bg-main-blue m-auto text-left text-xs lg:text-base font-heading text-white" onClick={() => setFlip(false)}>
                     <p className="">{content.text}</p>
                </div>
        </div>
    )

    return (
        <div className="relative mt-6 mb-3">
            <img src={content.image[0].url} className=""/>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-grey opacity-60" onClick={() => setFlip(true) }></div>
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-main-blue m-auto h-7 w-40 text-center text-lg font-heading text-white">
                     <p className="">{content.heading.toUpperCase()}</p>
                </div>
        </div>
    )
};