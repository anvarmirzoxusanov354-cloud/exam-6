import React from 'react';
import Clear from "../../assets/Clear.png";
import Clear1 from "../../assets/Clear1.png";
import Clear2 from "../../assets/Clear2.png";
import Ourn1 from "../../assets/Ourn1.png";

const RecentPostsSection = () => {
  return (
    <section className="bg-white py-16 px-8 font-sans">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-extrabold text-[#1d2130] mb-10">
          Read Recent Post
        </h2>

        <div className="grid grid-cols-2 gap-6">

          <div className="flex gap-4 items-start">
            <img src={Clear} alt="post" className="w-36 h-28 object-cover flex-shrink-0" />
            <div>
              <h3 className="font-bold text-[#1d2130] text-sm leading-snug mb-3">
                Today's best design trends for digital products
              </h3>
              <div className="flex items-center gap-2">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="author" className="w-6 h-6 rounded-full object-cover" />
                <div>
                  <p className="text-xs font-semibold text-[#1d2130]">Andrew Jonson</p>
                  <p className="text-xs text-gray-400">Jan 19, 2021</p>
                </div>
              </div>
            </div>
          </div>

         
          <div className="flex gap-4 items-start">
            <img src={Clear1} alt="post" className="w-36 h-28 object-cover flex-shrink-0" />
            <div>
              <h3 className="font-bold text-[#1d2130] text-sm leading-snug mb-3">
                Today's best design trends for digital products
              </h3>
              <div className="flex items-center gap-2">
                <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="author" className="w-6 h-6 rounded-full object-cover" />
                <div>
                  <p className="text-xs font-semibold text-[#1d2130]">Andrew Jonson</p>
                  <p className="text-xs text-gray-400">Jan 19, 2021</p>
                </div>
              </div>
            </div>
          </div>

         
          <div className="flex gap-4 items-start">
            <img src={Clear2} alt="post" className="w-36 h-28 object-cover flex-shrink-0" />
            <div>
              <h3 className="font-bold text-[#1d2130] text-sm leading-snug mb-3">
                Today's best design trends for digital products
              </h3>
              <div className="flex items-center gap-2">
                <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="author" className="w-6 h-6 rounded-full object-cover" />
                <div>
                  <p className="text-xs font-semibold text-[#1d2130]">Andrew Jonson</p>
                  <p className="text-xs text-gray-400">Jan 19, 2021</p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="flex gap-4 items-start">
            <img src={Ourn1} alt="post" className="w-36 h-28 object-cover flex-shrink-0" />
            <div>
              <h3 className="font-bold text-[#1d2130] text-sm leading-snug mb-3">
                Today's best design trends for digital products
              </h3>
              <div className="flex items-center gap-2">
                <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="author" className="w-6 h-6 rounded-full object-cover" />
                <div>
                  <p className="text-xs font-semibold text-[#1d2130]">Andrew Jonson</p>
                  <p className="text-xs text-gray-400">Jan 19, 2021</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RecentPostsSection;
