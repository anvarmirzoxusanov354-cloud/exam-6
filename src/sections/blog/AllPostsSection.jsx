import React from 'react';
import Clear from "../../assets/Clear.png";
import Clear1 from "../../assets/Clear1.png";
import Clear2 from "../../assets/Clear2.png";
import Ourn1 from "../../assets/Ourn1.png";

const AllPostsSection = () => {
  return (
    <section className="bg-white py-16 px-8 font-sans">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-extrabold text-[#1d2130] mb-10">All posts</h2>

        <div className="grid grid-cols-3 gap-6">

         
          <div>
            <img src={Clear} alt="post" className="w-full h-48 object-cover mb-4" />
            <h3 className="font-bold text-[#1d2130] text-sm leading-snug mb-2">
              We aim to attain the greatest satisfaction for our clients
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed mb-4">
              It is a long established fact that a reader will be distracted by the readable content of a page.
            </p>
            <div className="flex items-center gap-2">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="author" className="w-6 h-6 rounded-full object-cover" />
              <div>
                <p className="text-xs font-semibold text-[#1d2130]">Andrew Jonson</p>
                <p className="text-xs text-gray-400">Jan 19, 2021</p>
              </div>
            </div>
          </div>

        
          <div>
            <img src={Clear1} alt="post" className="w-full h-48 object-cover mb-4" />
            <h3 className="font-bold text-[#1d2130] text-sm leading-snug mb-2">
              We aim to attain the greatest satisfaction for our clients
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed mb-4">
              It is a long established fact that a reader will be distracted by the readable content of a page.
            </p>
            <div className="flex items-center gap-2">
              <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="author" className="w-6 h-6 rounded-full object-cover" />
              <div>
                <p className="text-xs font-semibold text-[#1d2130]">Andrew Jonson</p>
                <p className="text-xs text-gray-400">Jan 19, 2021</p>
              </div>
            </div>
          </div>

         
          <div>
            <img src={Clear2} alt="post" className="w-full h-48 object-cover mb-4" />
            <h3 className="font-bold text-[#1d2130] text-sm leading-snug mb-2">
              We aim to attain the greatest satisfaction for our clients
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed mb-4">
              It is a long established fact that a reader will be distracted by the readable content of a page.
            </p>
            <div className="flex items-center gap-2">
              <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="author" className="w-6 h-6 rounded-full object-cover" />
              <div>
                <p className="text-xs font-semibold text-[#1d2130]">Andrew Jonson</p>
                <p className="text-xs text-gray-400">Jan 19, 2021</p>
              </div>
            </div>
          </div>

          
          <div>
            <img src={Ourn1} alt="post" className="w-full h-48 object-cover mb-4" />
            <h3 className="font-bold text-[#1d2130] text-sm leading-snug mb-2">
              We aim to attain the greatest satisfaction for our clients
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed mb-4">
              It is a long established fact that a reader will be distracted by the readable content of a page.
            </p>
            <div className="flex items-center gap-2">
              <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="author" className="w-6 h-6 rounded-full object-cover" />
              <div>
                <p className="text-xs font-semibold text-[#1d2130]">Andrew Jonson</p>
                <p className="text-xs text-gray-400">Jan 19, 2021</p>
              </div>
            </div>
          </div>

        
          <div>
            <img src={Clear} alt="post" className="w-full h-48 object-cover mb-4" />
            <h3 className="font-bold text-[#1d2130] text-sm leading-snug mb-2">
              We aim to attain the greatest satisfaction for our clients
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed mb-4">
              It is a long established fact that a reader will be distracted by the readable content of a page.
            </p>
            <div className="flex items-center gap-2">
              <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="author" className="w-6 h-6 rounded-full object-cover" />
              <div>
                <p className="text-xs font-semibold text-[#1d2130]">Andrew Jonson</p>
                <p className="text-xs text-gray-400">Jan 19, 2021</p>
              </div>
            </div>
          </div>

        
          <div>
            <img src={Clear2} alt="post" className="w-full h-48 object-cover mb-4" />
            <h3 className="font-bold text-[#1d2130] text-sm leading-snug mb-2">
              We aim to attain the greatest satisfaction for our clients
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed mb-4">
              It is a long established fact that a reader will be distracted by the readable content of a page.
            </p>
            <div className="flex items-center gap-2">
              <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="author" className="w-6 h-6 rounded-full object-cover" />
              <div>
                <p className="text-xs font-semibold text-[#1d2130]">Andrew Jonson</p>
                <p className="text-xs text-gray-400">Jan 19, 2021</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AllPostsSection;
