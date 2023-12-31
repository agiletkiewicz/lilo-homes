import React from 'react';

export default function Contact({ }) {

  return (
    <>
      <section className="bg-droplet-light flex flex-wrap justify-center lg:justify-around pt-6 lg:pt-10 pb-2"> 
        <div className="justify-center pb-10">
          <img src='/home-about.png' className="rounded-full object-cover w-52 h-52 lg:w-60 lg:h-60" />
        </div>
        <div className="lg:w-1/2" >
          <div className="pl-6 pr-1 pt-1 pb-7 w-full lg:block">
            <h1 className="font-heading text-white text-4xl flex lg:justify-left justify-center">Contact me!</h1>
          </div>
          <p className="font-body text-black pl-6 pr-6 text-sm lg:text-xl pb-5 flex lg:justify-left justify-center">
            
          </p>
            <div className="flex lg:justify-left justify-center pl-6">
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

      <section className="lg:pl-20 lg:pr-20">
      <h1 className="text-3xl lg:text-5xl text-main-blue p-2 lg:p-6 font-heading lg:block">Testimonials</h1>
        <p className="font-body text-black pl-6 pr-6 text-sm lg:text-l pb-5 italic">
          “We rented the 3/1 Bungalow in 2021. The 1930 house is charming and in overall good condition and worked well for our situation at the time. We only had a couple of minor maintenance requests. Stacey quickly addressed the issues and worked with us to find the best solutions. The neighborhood is a convenient location to nearby shopping, rec center, and major roads. But also is quiet and we felt safe walking around. Stacy was respectful of our privacy and if she needed to come to the house she would notify us first. She was easy to interact with and a pleasant person overall.” - Past Tenant
        </p>
        <p className="font-body text-black pl-6 pr-6 text-sm lg:text-l pb-5 italic">
          “You should know that every time someone visits us, eyes light up and they comment on just how beautiful this house is. Your attention to detail and thoughtfulness to this place doesn't go unnoticed. We love it here.” - Past Tenant
        </p>
        <p className="font-body text-black pl-6 pr-6 text-sm lg:text-l pb-5 italic">
          “Stacey, I told my contractors what you saw when looking at my new townhome and they were so surprised and agreed those things you showed me should be fixed! They were so impressed I brought those things up that they asked me if I wanted to work for them... So, you have a job here in Houston if you need one!” - Past Client
        </p>
        <p className="font-body text-black pl-6 pr-6 text-sm lg:text-l pb-5 italic">
          “Thank you for telling me about these things with my staff; you’d make a great site manager. I’d hire you in a heartbeat if you ever want to get into construction.” - Past Contractor
        </p>
        <p className="font-body text-black pl-6 pr-6 text-sm lg:text-l pb-5 italic">
          Per a walkthrough showing my drawings for a foundation renovation. "Who did this? This is better than most engineers I've worked with" - Masonry and Excavating Company
        </p>
      </section>

      <section className="lg:pl-20 lg:pr-20 pb-20">
      <h1 className="text-3xl lg:text-5xl text-main-blue p-2 lg:p-6 font-heading lg:block">FAQ</h1>
        <ul class="list-disc pl-20">
          <li class="mb-4">
            <p class="text-lg text-gray-800">
              Interested in renting, but nothing showing as available? There’s no harm in sending me a message as I know some other great folks who may be able to support your search for housing and accommodations.
            </p>
          </li>
          <li class="mb-4">
            <p class="text-lg text-gray-800">
              Interested in mobilizing more Lilo Homes as a private investor? I am receptive.
            </p>
          </li>
          <li class="mb-4">
            <p class="text-lg text-gray-800">
              Interested in learning the ropes or trading skills? I am an advocate for the trade economy.
            </p>
          </li>
        </ul>
      </section>
    </>
  )
};