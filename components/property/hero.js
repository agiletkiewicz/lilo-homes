import React from 'react';
import Button from './button'

export default function Hero({ content }) {
    return (
        <>
            <h1 className="text-3xl lg:text-4xl text-main-blue p-2 font-heading lg:hidden">{content.heading}</h1>
            <header className="flex flex-wrap justify-center lg:justify-around">
                <img src={content.image[0].url} className="object-cover h-100 lg:w-2/4 p-2" />
                <div className="w-full lg:w-2/4">
                    <h1 className="text-3xl lg:text-5xl text-main-blue p-2 lg:p-6 font-heading hidden lg:block">{content.heading}</h1>
                    <p className="p-6 font-body lg:text-xl">{content.text}</p>
                    <div className="flex flex-wrap justify-center lg:justify-around">
                        <Button link={"https://rental.turbotenant.com/p/storrs-ave-utica-ny/296545"} content={"Rent"} />
                        <Button link={"https://rental.turbotenant.com/p/storrs-ave-utica-ny/296545"} content={"Airbnb"} />
                    </div>
                </div>

            </header>
        </>
    )
};