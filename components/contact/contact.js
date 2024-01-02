import React from 'react';

export default function Contact({ }) {

  return (
    <section className="bg-droplet-light flex flex-wrap justify-center items-center pt-6 lg:pt-10 pb-2"> 
      <div className="pb-1 lg:w-1/2 flex justify-center">
        <img src='/home-about.png' className="rounded-full object-cover lg:w-4/5 w-3/5" />
      </div>
      <div className="lg:w-1/2" >
        <div className="pl-6 pr-1 pt-1 pb-7 w-full lg:block">
          <h1 className="font-heading text-white text-4xl flex justify-center pt-6">Contact Stacey</h1>
        </div>
        <p className="font-body text-black pl-6 pr-6 text-sm lg:text-xl pb-5 flex lg:justify-left justify-center">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe2AV9ReeaHBcaw2tiYY8Qs438ku7fzK3yzUvWPBftc7QC9WA/viewform?embedded=true" height="500" width="100%" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
        </p>
          <div className="flex lg:justify-left justify-center pl-0">
            <a href="https://www.instagram.com/lilohomes/">
              <img src="/insta.png" className="h-10 lg:h-14 inline" /> 
            </a>
            <a href="https://www.facebook.com/lilohomes">
              <img src="/fb.png" className="h-10 lg:h-14 inline pl-5 pr-5" /> 
            </a>
            <a href="https://www.linkedin.com/in/staceymae/">
              <img src="/linkedin.png" className="h-10 lg:h-14 inline" />
            </a>
          </div>
      </div>
    </section>
)
};