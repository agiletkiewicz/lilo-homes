import React, { useState } from 'react';

export default function Offers({ offer }) {

  const [flipped, setFlip] = useState(false);

  let isMobile;

  if (typeof window !== "undefined") {
    isMobile = window.innerWidth < 640;
  }


  if (flipped) return (
    <div className="lg:w-2/5 w-100 flex items-center justify-center">
      <a href={offer.url} target="_blank">
        <div className="rounded-full w-60 h-60 border-2 border-main-blue flex items-center justify-cente bg-main-blue text-white" onMouseLeave={() => setFlip(false)}>
          <span className="text-center whitespace-pre-wrap p-2">{offer.content}</span>
        </div>
      </a>
    </div>
  )

  if (isMobile)  return (
    <div className="lg:w-2/5 w-100 flex items-center justify-center cursor-pointer">
      <div className="rounded-full w-60 border-2 border-main-blue" onClick={() => setFlip(true)}>
          <img src={offer.image} className=""/>
      </div>
    </div>
  )

  return (
    <div className="lg:w-2/5 w-100 flex items-center justify-center cursor-pointer">
      <div className="rounded-full w-60 border-2 border-main-blue" onMouseEnter={() => setFlip(true)}>
          <img src={offer.image} className=""/>
      </div>
    </div>
  )
};