import React from 'react';
import { testimonials  } from 'content/texts';

export default function Testimonials({ }) {

  return (
    <section className="lg:pl-20 lg:pr-20 pl-5 pr-5">
      <div className="overflow-y-scroll">
        <h1 className="text-3xl lg:text-5xl text-main-blue p-2 lg:p-6 font-heading lg:block">Testimonials</h1>
        <div className="h-40 overflow-y-scroll lg:w-4/6 w-100 border-2 rounded-md shadow-lg border-grey lg:ml-6">
          {testimonials.map((testimonial, index) => (
            <p key={index} className="font-body text-black pl-6 pr-6 text-sm lg:text-l pb-5 italic">
              {testimonial}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
};