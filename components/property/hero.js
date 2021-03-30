import React from 'react';

export default function Hero({ content }) {
    return (
        <header>
            <h1 className="text-3xl lg:text-4xl text-main-blue p-2 font-heading">{content.heading}</h1>
            <img src={content.image[0].url} className="object-cover h-100" />
            <p className="p-6 font-body lg:text-xl">{content.text}</p>
        </header>
    )
};