import React from 'react';
import { offers } from 'content/texts';
import Offer from './offer.js'

export default function Offers({ }) {

  return (
    <section className="lg:pl-20 lg:pr-20 pb-20 pl-5 pr-5 flex flex-wrap justify-around gap-20 p-10">
      {offers.map((offer, idx) => (
        <Offer offer={offer} key={idx}/>
      ))}
    </section>
  )
};