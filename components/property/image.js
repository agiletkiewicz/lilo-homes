import React from 'react';


export default function Image({ url }) {
    return (
        <div className="w-11/12 lg:w-6/12">
            <img src={url} />
        </div>
    )
};