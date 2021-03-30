import React from 'react';

export default function Hero({ content }) {
    return (
        <header>
            <h1>{content.heading}</h1>
            <img src={content.image[0].url} />
            <p>{content.text}</p>
        </header>
    )
};