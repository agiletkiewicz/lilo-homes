import React from 'react';

export default function BackToHome() {
    
  return (
    <a href="/">
      <div className="flex justify-left items-center lg:pl-5 pl-2 text-main-blue">
        <img src="/left.png" className="w-auto h-20"/> 
        <div>
          Back to homepage
        </div>
      </div>
    </a>
  )
};
