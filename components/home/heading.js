import React from 'react';

export default function Hero({ content }) {
    return (
        <section className="bg-orange h-3/5"> 
            <div className="font-heading text-main-blue pl-3 pr-40 pt-3 pb-7 text-3xl">
                <h1>{content.heading}</h1>
            </div>
            <p className="font-body text-black pl-3 pr-3 text-sm pb-5">
                {content.text}
            </p>
            <p className="font-body text-black pl-3 pr-3 text-sm pb-5">
                Learn more.
            </p>
        </section>
    )
};