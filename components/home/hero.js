import React from 'react';

export default function Hero({ hero, home }) {
    return (
        <header className="relative"> 
                <img src={hero.image[0].url} className="lg:h-5/6 lg:w-full lg:object-cover" />
                <div className="absolute text-2xl top-2 text-main-blue pl-4 lg:hidden">
                    <div className="bg-neutral w-8/12 font-heading pl-1">
                        <h1 className="">{hero.heading}</h1>
                    </div>
                </div>
            <div className="bg-neutral lg:absolute lg:top-1/4 lg:left-1/2 lg:transform lg:-translate-x-2/4 lg:w-8/12 lg:opacity-90 lg:rounded-lg"> 
                <div className="font-heading text-main-blue pl-6 pr-40 pt-3 pb-7 text-4xl lg:text-4xl lg:opacity-100">
                    <h1>{home.heading}</h1>
                </div>
                <p className="font-body text-black pl-6 pr-6 text-sm lg:text-xl pb-5 lg:opacity-100">
                    {home.text}
                </p>
                {/* <p className="font-body text-black pl-6 pr-6 text-sm lg:text-xl pb-5 lg:opacity-100">
                    Learn more
                </p> */}
            </div>
        </header>
    )
};