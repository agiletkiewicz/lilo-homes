import React from 'react';
import { testimonials  } from 'content/texts';
import Carousel from '../shared/carousel.js';

export default function Testimonials({ }) {

  return (
    <section className="lg:pl-20 lg:pr-20 pl-5 pr-5">
      <h1 className="text-3xl lg:text-5xl text-main-blue p-2 lg:p-6 font-heading text-center p-5">Testimonials</h1>
      <div className="italic text-lg whitespace-pre-wrap">
        <Carousel lastIdx={testimonials.length - 1} >
          <Carousel.ArrowLeft />
          <Carousel.Text texts={testimonials}/>
          <Carousel.ArrowRight />
        </Carousel>
      </div>
    </section>
  )
};