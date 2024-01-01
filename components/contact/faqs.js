import React from 'react';
import { faqs } from 'content/texts';

export default function FAQs({ }) {

  return (
    <section className="lg:pl-20 lg:pr-20 pb-20 pl-5 pr-5">
      <h1 className="text-3xl lg:text-5xl text-main-blue p-2 lg:p-6 font-heading lg:block">Interest</h1>
      <ul class="list-disc pl-10 lg:pl-20">
        {faqs.map(faq => (
          <li class="mb-4">
            <p class="text-lg text-gray-800">
              { faq }
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
};