import React from 'react';
import Button from './button'

export default function Hero({ content, status, links }) {
  return (
    <>
      <h1 className="text-3xl lg:text-4xl text-main-blue p-2 font-heading lg:hidden">{content.heading}</h1>
      <header className="flex flex-wrap justify-center lg:justify-around pb-5">
        <img src={content.image} className="w-screen h-full lg:w-2/4 p-2" />
        <div className="w-full lg:w-2/4">
          <h1 className="text-3xl lg:text-5xl text-main-blue p-2 lg:p-6 font-heading hidden lg:block">{content.heading}</h1>
          <h2 className="font-heading text-main-blue text-xl lg:text-xl p-2 lg:p-6">{status.text}</h2>
          <p className="p-6 font-body lg:text-xl whitespace-pre-wrap">{content.text}</p>
          <div className="flex flex-wrap justify-center lg:justify-around">
            {links.map((link, idx) => (
                <Button link={link.url} content={link.content} key={idx} />
            ))}
          </div>
        </div>
      </header>
    </>
  )
};