import React from 'react';


export default function Icons({ icons }) {
    return (
        <div className="h-16 lg:h-24 flex justify-between lg:justify-center m-5">
            {icons.map(icon => (
                <img src={icon} className="h-16 lg:h-24" />
            ))}
        </div>
    )
};