import React, { useState } from 'react';

export default function Card({ content }) {

    const [flipped, setFlip] = useState(false);

    if (flipped) return (
      <a href={`/${content.key}`}>
        <div className="relative mt-6 mb-3 cursor-default">
            <img src={content.image} className="" />
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-grey opacity-60"></div>
            <div className="p-2 lg:p-5 absolute top-0 bottom-0 left-0 right-0 bg-main-blue m-auto text-left text-xs lg:text-base font-heading text-white">
              <p className="font-body">{content.text}</p>
              <p className="absolute bottom-2 right-2">Learn more</p>
            </div>
        </div>
      </a>
    )

    return (
      <div className="relative mt-6 mb-3">
        <img src={content.image} className=""/>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-grey opacity-60" onClick={() => setFlip(true) }></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-2/4 bg-main-blue text-center text-lg font-heading text-white p-2 cursor-default" onClick={() => setFlip(true)}>
          <p className="font-body">{content.heading.toUpperCase()}</p>
        </div>
      </div>
    )
};