import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const AppFooter = () => {
  return (
    <footer className="bg-white font-sans pt-20">
      <div className="max-w-7xl mx-auto px-20 pb-20 grid grid-cols-12 gap-10">
        
        
        <div className="col-span-5">
          
          <div className="mb-10 w-8 h-8">
            <img src="/path-to-logo.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
          
          <h2 className="text-5xl font-bold text-[#1d2130] leading-tight mb-8">
            Let's make something special
          </h2>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-[#1d2130]">Let's talk! 🤙</h4>
            <div className="text-gray-600 space-y-1 border-b border-gray-100 pb-8 w-fit pr-20">
              <p>020 7993 2905</p>
              <p>hi@finsweet.com</p>
            </div>
            <p className="text-gray-500 text-sm pt-4">
              DLF Cybercity, Bhubaneswar,<br /> India, 123456
            </p>
          </div>
        </div>

        
        <div className="col-span-7 grid grid-cols-3 pt-12">
         
          <ul className="space-y-4 text-[#1d2130] font-bold">
            <li className="cursor-pointer hover:text-blue-600">Home</li>
            <li className="cursor-pointer hover:text-blue-600">Service</li>
            <li className="cursor-pointer hover:text-blue-600">Company</li>
            <li className="cursor-pointer hover:text-blue-600">Career</li>
            <li className="cursor-pointer hover:text-blue-600">News</li>
          </ul>

          
          <div>
            <h5 className="font-bold text-gray-400 mb-6 uppercase tracking-wider text-xs">Service</h5>
            <ul className="space-y-3 text-gray-600 text-sm font-semibold">
              <li className="cursor-pointer">Technical support</li>
              <li className="cursor-pointer">Testing</li>
              <li className="cursor-pointer">Development</li>
              <li className="cursor-pointer">AWS/Azure</li>
              <li className="cursor-pointer">Consulting</li>
              <li className="cursor-pointer">Information Technology</li>
            </ul>
          </div>

          
          <div className="relative">
            <h5 className="font-bold text-gray-400 mb-6 uppercase tracking-wider text-xs">Resourses</h5>
            <ul className="space-y-3 text-gray-600 text-sm font-semibold">
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Testimonial</li>
              <Link to="/privacy-policy" className="block cursor-pointer hover:text-blue-600">Privacy Policy</Link>
              <li className="cursor-pointer">Terms of use</li>
              <li className="cursor-pointer">Blog</li>
            </ul>

           
            <div className="absolute bottom-0 flex items-center gap-3 font-bold text-[#1d2130] cursor-pointer">
               <div className="flex">
                  <div className="w-4 h-4 bg-orange-200"></div>
                  <div className="w-4 h-4 bg-blue-600"></div>
               </div>
               <span>Contact Us —&gt;</span>
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-[#ffe6d2] py-6 px-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <span className="font-black text-xl text-[#1d2130]">{`{Finsweet`}</span>
            <span className="text-gray-600 text-sm">©2021 Finsweet</span>
          </div>
          
          
          <div className="flex gap-6">
            <FacebookIcon/>
            <TwitterIcon/>
            <InstagramIcon/>
            <LinkedInIcon/>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
