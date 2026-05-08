import React from 'react';
import CareerImage from '../../assets/CareerImage.svg'



const CareersSection = () => {
  return (
    <section className="relative w-full bg-white py-20 px-8 font-sans overflow-hidden">

      <div className="absolute top-6 right-10 flex">
        <div className="w-6 h-6 bg-orange-400" />
        <div className="w-6 h-6 bg-blue-600" />
      </div>

      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold tracking-[0.25em] text-gray-500 uppercase">
          Career at Finsweet
        </span>

        <h2 className="mt-4 text-4xl font-extrabold text-[#1d2130] leading-tight">
          We hired people who are <br />
          Always Passionate about <br />
          what they do
        </h2>

        <p className="mt-5 text-gray-500 text-sm leading-relaxed max-w-sm mx-auto">
          Through True Rich Attended does no end it his mother since real had half
          every him case in packages enquire we up ecstatic unsatiable saw .
        </p>
      </div>

      
      <div className="mt-12 flex justify-center">

     <img src={CareerImage} alt="carrer_img" />

      </div>

      <div className="mt-6 flex flex-col items-center gap-2">
        <span className="text-sm font-semibold text-[#1d2130] tracking-wide">
          See Our open positions
        </span>
        <span>👇</span>
      </div>

    </section>
  );
};

export default CareersSection;
