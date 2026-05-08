import React, { useState } from 'react';
import Team1 from '../../assets/Team1.png'
import Team2 from '../../assets/Team2.png'
import Team3 from '../../assets/Team3.png'
import Team4 from '../../assets/Team4.png'
import Team5 from '../../assets/Team6.png'
import Team6 from '../../assets/Team6.png' 
import Team7 from '../../assets/Team7.png'
import Team8 from '../../assets/Team8.png'

import { useNavigate } from 'react-router-dom';

const teamMembers = [
  { id: 1, name: 'Marcus Reid',    role: 'CEO & Founder',    img: Team1, highlight: false },
  { id: 2, name: 'David Okafor',   role: 'Product Manager',  img: Team2, highlight: false },
  { id: 3, name: 'Andrew Kelvin',  role: 'Lead Developer',   img: Team3, highlight: false },
  { id: 4, name: 'Ryan Cooper',    role: 'UX Designer',      img: Team4, highlight: true  },
  { id: 5, name: 'Javena Melo',    role: 'Support Assist',   img: Team5, highlight: false },
  { id: 6, name: 'Carlos Bright',  role: 'Frontend Dev',     img: Team6, highlight: false },
  { id: 7, name: 'Omar Hassan',    role: 'Backend Dev',      img: Team7, highlight: false },
  { id: 8, name: 'Lucas Stone',    role: 'Marketing Lead',   img: Team8, highlight: false },
];




const TwitterIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TeamSection = () => {
  const [hovered, setHovered] = useState(null);
  const nagivate =useNavigate();
  return (
    <section className="bg-white py-20 px-8 font-sans">
      <div className="max-w-6xl mx-auto">

       
        <div className="border-l-4 border-blue-600 pl-4 mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
            Meet Our Team
          </span>
          <h2 className="mt-3 text-4xl font-extrabold text-[#1d2130] leading-tight max-w-sm">
            Teamwork is the only way we work
          </h2>
          <p className="mt-4 text-gray-500 text-sm leading-relaxed max-w-xs">
            Through True Rich Attended does no end it his mother since
            real had half every him case in packages enquire we up
            ecstatic unsatiable.
          </p>
        </div>

        
        <div className="grid grid-cols-4 gap-0">
          {teamMembers.map((member) => (
            <div onClick={() => nagivate(`/job/${member.id}`)}
              key={member.id} 
              className={`relative overflow-hidden cursor-pointer h-[280px] ${
                member.highlight ? 'ring-4 ring-pink-500 ring-inset z-10' : ''
              }`}
              onMouseEnter={() => setHovered(member.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />

              
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 flex flex-col justify-end p-4 ${
                  hovered === member.id || member.id === 5 ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="text-white font-bold text-lg leading-tight">{member.name}</p>
                <p className="text-gray-300 text-xs mb-3">{member.role}</p>
                <div className="flex gap-3 text-white">
                  <a href="#" className="hover:text-blue-400 transition-colors"><TwitterIcon /></a>
                  <a href="#" className="hover:text-pink-400 transition-colors"><InstagramIcon /></a>
                  <a href="#" className="hover:text-blue-300 transition-colors"><LinkedinIcon /></a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
