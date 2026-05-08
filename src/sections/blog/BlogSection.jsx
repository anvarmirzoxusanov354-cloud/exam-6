import React from 'react';
import { Link } from 'react-router-dom';
import Ourn1 from "../../assets/Ourn1.png";


const BlogSection = () => {
  return ( 
    <section className="bg-white py-16 px-8 font-sans">
      <div className="max-w-6xl mx-auto flex gap-8 items-start">

        
        <div className="w-1/2">
          <div className="w-5 h-5 bg-orange-200 mb-4" />

          <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
            Trending
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-[#1d2130] leading-tight max-w-sm">
            Breaking the code How did we build our Figma plugin
          </h2>

          <p className="mt-4 text-gray-500 text-sm leading-relaxed max-w-sm">
            It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The Maker is a decentralized. We
            aim to attain the.
          </p>

          <Link to="/blog-inner" className="mt-4 inline-flex items-center gap-2 text-blue-600 text-sm font-semibold">
            Read More →
          </Link>

          <div className="flex items-center gap-3 mt-5 mb-5">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Andrew Jonson"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm text-[#1d2130] font-semibold">Andrew Jonson</span>
            <span className="text-gray-300">|</span>
            <span className="text-gray-400 text-sm">Posted on 27th January 2021</span>
          </div>

          
          <Link to="/blog-inner" className="relative block">
            <img
              src={Ourn1}
              alt="Blog cover"
              className="w-full h-[280px] object-cover"
            />
          
            <div className="absolute bottom-0 right-0 flex">
              <div className="w-6 h-6 bg-orange-400" />
              <div className="w-6 h-6 bg-blue-600" />
            </div>
          </Link>
        </div>

        
        <div className="w-1/2 bg-[#FFEAD5] p-8 relative">
        
          <div className="absolute top-4 right-4 flex">
            <div className="w-4 h-4 bg-blue-800" />
            <div className="w-4 h-4 bg-blue-600" />
          </div>

        
          <div className="pb-6 mb-6 border-b border-orange-200">
            <h3 className="font-bold text-[#1d2130] text-base leading-snug">
              Great design expectations prejudice in digital products in Next Year
            </h3>
            <div className="flex items-center gap-2 mt-3">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Andrew Jonson"
                className="w-7 h-7 rounded-full object-cover"
              />
              <div>
                <p className="text-xs font-semibold text-[#1d2130]">Andrew Jonson</p>
                <p className="text-xs text-gray-500">Jan 19, 2021</p>
              </div>
            </div>
          </div>

        
          <div className="pb-6 mb-6 border-b border-orange-200">
            <h3 className="font-bold text-[#1d2130] text-base leading-snug">
              Great design expectations prejudice in digital products in Next Year
            </h3>
            <div className="flex items-center gap-2 mt-3">
              <img
                src="https://randomuser.me/api/portraits/men/44.jpg"
                alt="Mathew Josele"
                className="w-7 h-7 rounded-full object-cover"
              />
              <div>
                <p className="text-xs font-semibold text-[#1d2130]">Mathew Josele</p>
                <p className="text-xs text-gray-500">Jan 19, 2021</p>
              </div>
            </div>
          </div>

       
          <div>
            <h3 className="font-bold text-[#1d2130] text-base leading-snug">
              Great design expectations prejudice in digital products in Next Year
            </h3>
            <div className="flex items-center gap-2 mt-3">
              <img
                src="https://randomuser.me/api/portraits/men/65.jpg"
                alt="Hussen Abakas"
                className="w-7 h-7 rounded-full object-cover"
              />
              <div>
                <p className="text-xs font-semibold text-[#1d2130]">Hussen Abakas</p>
                <p className="text-xs text-gray-500">Jan 19, 2021</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogSection;
