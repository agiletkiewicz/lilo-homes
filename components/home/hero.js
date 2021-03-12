import React from 'react';

export default function Hero({ content }) {
    return (
        <div>
            {content.heading} 
            <img src={content.image[0].url} />
        </div>
    )
};