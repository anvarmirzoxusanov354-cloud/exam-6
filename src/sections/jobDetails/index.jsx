import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Team1 from '../../assets/Team1.png'
import Team2 from '../../assets/Team2.png'
import Team3 from '../../assets/Team3.png'
import Team4 from '../../assets/Team4.png'
import Team5 from '../../assets/Team6.png'
import Team6 from '../../assets/Team6.png' 
import Team7 from '../../assets/Team7.png'
import Team8 from '../../assets/Team8.png'
import Templete from '../../assets/Templete_img.png'
import Templete2 from '../../assets/Templete_img1.png'

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const teamMembers = [
  { id: 1, name: 'Marcus Reid', role: 'CEO & Founder', img: Team1 },
  { id: 2, name: 'David Okafor', role: 'Product Manager', img: Team2 },
  { id: 3, name: 'Andrew Kelvin', role: 'Lead Developer', img: Team3 },
  { id: 4, name: 'Ryan Cooper', role: 'UX Designer', img: Team4 },
  { id: 5, name: 'Javena Melo', role: 'Support Assist', img: Team5 },
  { id: 6, name: 'Carlos Bright', role: 'Frontend Dev', img: Team6 },
  { id: 7, name: 'Omar Hassan', role: 'Backend Dev', img: Team7 },
  { id: 8, name: 'Lucas Stone', role: 'Marketing Lead', img: Team8 },
];

const JobDetailDynamic = () => {
  const { id } = useParams();
  

  let member = teamMembers[0]; 
  for (let i = 0; i < teamMembers.length; i++) {
    if (teamMembers[i].id === parseInt(id)) {
      member = teamMembers[i];
    }
  }

  return (
    <div className="font-sans text-[#1d2130]">
      
      <div className="bg-white py-20 px-10 text-center">
        <div className="max-w-2xl mx-auto">
          <img 
            src={member.img} 
            className="w-44 h-44 rounded-full mx-auto mb-8 object-cover shadow-lg" 
            alt={member.name} 
          />
          <h1 className="text-4xl font-bold mb-3">{member.name}</h1>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">{member.role}</p>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.
          </p>
          
          <div className="flex justify-center gap-6 text-xl font-bold">
            <InstagramIcon/>
            <TwitterIcon/>
            <LinkedInIcon/>
          </div>
        </div>
      </div>

      <div className="bg-[#eef8f9] py-20 px-10">
        <div className="max-w-6xl mx-auto">
          <div className="w-4 h-4 bg-blue-600 mb-6"></div>
          <h2 className="text-4xl font-bold mb-12">Blog posts from {member.name.split(' ')[0]}</h2>
          
          <div className="grid grid-cols-2 gap-8">
            
            <div className="bg-white flex shadow-md overflow-hidden">
              <img src={Templete} className="w-1/3 object-cover" alt="blog" />
              <div className="p-8">
                <p className="text-gray-400 text-xs mb-3">Jan 19, 2021</p>
                <h4 className="text-xl font-bold mb-4">Today's best design trends for digital products</h4>
                <Link to="/blog" className="text-blue-600 font-bold hover:underline">Read More →</Link>
              </div>
            </div>

            <div className="bg-white flex shadow-md overflow-hidden">
              <img src={Templete2} className="w-1/3 object-cover" alt="blog" />
              <div className="p-8">
                <p className="text-gray-400 text-xs mb-3">Jan 19, 2021</p>
                <h4 className="text-xl font-bold mb-4">A practical guide to building a brand strategy</h4>
                <Link to="/blog" className="text-blue-600 font-bold hover:underline">Read More →</Link>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default JobDetailDynamic;
