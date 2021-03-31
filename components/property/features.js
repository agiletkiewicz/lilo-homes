import React from 'react';

export default function Features({ content }) {
    return (
        <section className="bg-droplet-dark p-6"> 
            <h1 className="font-heading text-white text-3xl lg:text-4xl pb-5">{content.heading}</h1>
            <p className="font-body text-lg text-white">{content.text}</p>
        </section>
    )
};