import React from 'react';

export default function About({ content }) {
    return (
        <section className="bg-droplet-light flex flex-wrap justify-center lg:justify-around pt-2 lg:pt-10 pb-10"> 
            <div className="pl-6 pr-6 pt-1 pb-7 w-full lg:hidden">
                <h1 className="font-heading text-white text-4xl">{content.heading}</h1>
            </div>
            <div className="justify-center pb-10">
                <img src={content.image} className="rounded-full object-cover w-52 h-52 lg:w-60 lg:h-60" />
            </div>
            <div className="lg:w-1/2" >
                <div className="pl-6 pr-1 pt-1 pb-7 w-full hidden lg:block">
                    <h1 className="font-heading text-white text-4xl">{content.heading}</h1>
                </div>
                <p className="font-body text-black pl-6 pr-6 text-sm lg:text-xl pb-5">
                    {content.text}
                </p>
                <div className="flex justify-center">
                   <a href="https://www.instagram.com/lilohomes/">
                       <img src="/insta.png" className="h-10 lg:h-14 inline" /> 
                    </a>
                    <a href="https://www.facebook.com/lilohomes">
                        <img src="/fb.png" className="h-10 lg:h-14 inline pl-5 pr-5" /> 
                    </a>
                    <a href="https://www.linkedin.com/in/staceymae/">
                        <img src="/linkedin.png" className="h-10 lg:h-14 inline" />
                    </a>
                </div>
            </div>
        </section>
    )
};