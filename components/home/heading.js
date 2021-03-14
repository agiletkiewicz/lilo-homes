import React from 'react';

export default function Hero({ content }) {
    return (
        <section> 
            <div className="font-heading text-main-blue">
                <h1>{content.heading}</h1>
            </div>
            <p className="font-body text-black">
                {content.text}
            </p>
        </section>
    )
};