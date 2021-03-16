import React from 'react';

export default function About({ content }) {
    return (
        <section className="bg-droplet-light flex flex-wrap justify-center lg:justify-around pt-2 lg:pt-10 pb-10"> 
            <div className="pl-6 pr-6 pt-1 pb-7 w-full lg:hidden">
                <h1 className="font-heading text-white text-4xl">{content.heading}</h1>
            </div>
            <div className="justify-center pb-10">
                <img src={content.image[0].url} className="rounded-full object-cover w-52 h-52 lg:w-60 lg:h-60" />
            </div>
            <div className="lg:w-1/2" >
                <div className="pl-6 pr-1 pt-1 pb-7 w-full hidden lg:block">
                    <h1 className="font-heading text-white text-4xl">{content.heading}</h1>
                </div>
                <p className="font-body text-black pl-6 pr-6 text-sm lg:text-xl pb-5">
                    {content.text}
                 </p>
            </div>
        </section>
    )
};