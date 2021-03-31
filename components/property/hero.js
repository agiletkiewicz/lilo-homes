import React from 'react';
import Button from './button'

export default function Hero({ content, status, links }) {
    return (
        <>
            <h1 className="text-3xl lg:text-4xl text-main-blue p-2 font-heading lg:hidden">{content.heading}</h1>
            <header className="flex flex-wrap justify-center lg:justify-around pb-5">
                <img src={content.image[0].url} className="object-cover h-100 lg:w-2/4 p-2" />
                <div className="w-full lg:w-2/4">
                    <h1 className="text-3xl lg:text-5xl text-main-blue p-2 lg:p-6 font-heading hidden lg:block">{content.heading}</h1>
                    <h2 className="font-heading text-main-blue text-xl lg:text-xl p-2 lg:p-6">{status.text}</h2>
                    <p className="p-6 font-body lg:text-xl">{content.text}</p>
                    <div className="flex flex-wrap justify-center lg:justify-around">
                        {links.map(link => (
                            <Button link={link.url} content={link.content} />
                        ))}
                        {/* <Button link={"https://www.airbnb.com/rooms/46414569?s=67&unique_share_id=373fdc1f-4d39-4215-a425-1fc7b1220946&source_impression_id=p3_1613800287_TYMeMLTQ2RafXIxU"} content={"Airbnb"} /> */}
                    </div>
                </div>
            </header>
        </>
    )
};