import React from 'react';
import { testimonials  } from 'content/texts';
import Carousel from '../shared/carousel.js';

export default function Testimonials({ }) {

  return (
    <section className="lg:pl-20 lg:pr-20 pl-5 pr-5">
      <h1 className="text-3xl lg:text-5xl text-main-blue p-2 lg:p-6 font-heading lg:block">Testimonials</h1>
      <div className="italic whitespace-pre-wrap">
        <Carousel lastIdx={testimonials.length - 1} >
          <Carousel.ArrowLeft />
          <Carousel.Text texts={testimonials}/>
          <Carousel.ArrowRight />
        </Carousel>
      </div>
    </section>
  )
};