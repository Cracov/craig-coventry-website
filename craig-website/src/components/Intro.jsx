import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold text-sky-800">Craig Coventry</h1>
         <p className="text-base md:text-xl mb-3 font-medium text-sky-800">Computer Science and Mathematics (BSc Hons)</p>
         <p className="text-sm max-w-xl mb-6">
            Hi, I'm a recent graduate from the University of Edinburgh! I'm particularly interested in the areas of
            machine Learning, data Science, education and anything plant related!
            </p>
      </div>
   )
}

export default Intro;