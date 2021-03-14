import React from 'react';

export default function Hero({ content }) {
    return (
        <header> 
            <figure>
                <img src={content.image[0].url} className="object-scale-down" />
                <figcaption className="absolute text-2xl -mt-60 text-main-blue pl-4">
                    <div className="bg-orange w-8/12 font-heading">
                        <h1 className="">{content.heading}</h1>
                    </div>
                </figcaption>
            </figure>
        </header>
    )
};