import React from 'react';

export default function About({ content }) {
    return (
        <section className="bg-droplet-light"> 
            <div className="font-heading text-main-blue pl-6 pr-40 pt-3 pb-7 text-3xl lg:text-4xl">
                <h1>{content.heading}</h1>
            </div>
            <p className="font-body text-black pl-6 pr-6 text-sm lg:text-xl pb-5">
                {content.text}
            </p>
            <p className="font-body text-black pl-6 pr-6 text-sm lg:text-xl pb-5">
                Learn more.
            </p>
        </section>
    )
};