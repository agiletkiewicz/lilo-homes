import React from 'react';
import Map from './map';
import { location } from '../../content/texts.js'

export default function Hero({ }) {

    return (
      <>
        <h1 className="text-3xl lg:text-4xl text-main-blue p-5 font-heading lg:hidden">Location</h1>
        <header className="flex flex-wrap justify-center lg:justify-around pb-5">
            <Map />
            <div className="w-full lg:w-2/4">
                <h1 className="text-3xl lg:text-5xl text-main-blue p-2 lg:p-6 font-heading hidden lg:block">Location</h1>
                <p className="p-6 font-body lg:text-xl">{location}</p>
            </div>
        </header>
      </>
    )
};