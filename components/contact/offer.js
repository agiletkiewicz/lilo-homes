import React, { useState } from 'react';

export default function Offers({ offer }) {

  const [flipped, setFlip] = useState(false);

  if (flipped) return (
    <div className="lg:w-2/5 w-100 flex items-center justify-center">
      <a href={offer.url} target="_blank">
        <div className="rounded-full w-60 h-60 border-2 border-main-blue flex items-center justify-cente bg-main-blue text-white">
          <span className="text-center whitespace-pre-wrap p-2">{offer.content}</span>
        </div>
      </a>
    </div>
  )

  return (
    <div className="lg:w-2/5 w-100 flex items-center justify-center cursor-pointer" onClick={() => setFlip(true) }>
      <div className="rounded-full w-60 border-2 border-main-blue">
          <img src={offer.image} className=""/>
      </div>
    </div>
  )
};