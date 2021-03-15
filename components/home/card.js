import React from 'react';
import Image from 'next/image';

export default function Card({ content }) {
    return (
        <img src={content.image[0].url} className="pt-6 pb-3" />
    )
};