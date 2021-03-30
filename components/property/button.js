import React from 'react';


export default function Button({ link, content }) {
    return (
        <div className="w-1/2 m-4 lg:w-1/4">
            <a href={link}>
                <div className="border-solid border-black border-2 px-10 py-2 w-auto text-center text-xl shadow-xl">{content}</div>
            </a>
        </div>
    )
};