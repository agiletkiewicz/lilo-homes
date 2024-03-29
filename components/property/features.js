import React from 'react';
import Icons from './icons'

export default function Features({ content, icons }) {
    return (
        <section className="bg-droplet-dark lg:px-40 lg:py-10 lg:text-center p-6    "> 
            <h1 className="font-heading text-white text-3xl lg:text-4xl pb-5">{content.heading}</h1>
            <Icons icons={icons} />
            <p className="font-body text-lg lg:text-xl text-white">{content.text}</p>
        </section>
    )
};