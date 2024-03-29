import React from 'react';


export default function Button({ link, content }) {
  return (
    <div className="w-1/2 m-4 lg:w-1/4">
      <a href={link} target="_blank">
        <div className="border-solid border-grey border-2 px-10 py-2 w-auto text-center font-heading text-xl shadow-xl bg-main-blue hover:bg-droplet-light text-white rounded-md">{content}</div>
      </a>
    </div>
  )
};