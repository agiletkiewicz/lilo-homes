import React from 'react';


export default function Map({ }) {
  return (
    <div className="flex justify-center">
      <div className="p-5 lg:hidden">
        <iframe src="https://www.google.com/maps/d/embed?mid=1HxTwZ_s8MPG-iheZpboeP6oH1c7KbzEc&ehbc=2E312F" width="100%" height="240"></iframe>
      </div>
      <div className="p-5 hidden lg:block">
        <iframe src="https://www.google.com/maps/d/embed?mid=1HxTwZ_s8MPG-iheZpboeP6oH1c7KbzEc&ehbc=2E312F" width="500" height="400"></iframe>
      </div>
    </div>
  )
};