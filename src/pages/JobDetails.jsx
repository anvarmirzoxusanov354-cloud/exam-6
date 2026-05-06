import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const jobsData = {
  'full-stack-developer': {
    title: 'Full Stack Developer',
    description: 'We are looking for a skilled developer to join our engineering team.',
    location: 'Bengaluru, India',
    experience: '3 to 5 Years Of Experience',
    department: 'Engineering',
    positions: 'Full Time 3 Position Available.',
  },
  'testing-engineer': {
    title: 'Testing Engineer',
    description: 'Ensure the quality of our products with automated and manual testing.',
    location: 'Remote',
    experience: '2 to 4 Years Of Experience',
    department: 'Quality Assurance',
    positions: 'Full Time 2 Position Available.',
  },
  'hr-manager': {
    title: 'HR Manager',
    description: 'Manage our talent and build a great culture at Finsweet.',
    location: 'Mumbai, India',
    experience: '5+ Years Of Experience',
    department: 'Human Resources',
    positions: 'Full Time 1 Position Available.',
  },
  'product-designer': {
    title: 'Product Designer',
    description: 'Design beautiful and functional user experiences for our clients.',
    location: 'Mumbai, India',
    experience: '4+ Years Of Experience',
    department: 'Design',
    positions: 'Full Time 2 Position Available.',
  },
  'wordpress-developer': {
    title: 'Wordpress Developer',
    description: 'Build and maintain high-performance Wordpress sites.',
    location: 'Mumbai, India',
    experience: '3+ Years Of Experience',
    department: 'Web Development',
    positions: 'Full Time 4 Position Available.',
  },
};

const JobDetails = () => {
  const { jobId } = useParams();
  const job = jobsData[jobId] || jobsData['full-stack-developer'];
  const [activeTab, setActiveTab] = useState('Details');

  return (
    <div className="font-sans bg-white">

      <section className="py-20 px-8 bg-white border-b">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="max-w-xl">
            <Link to="/career" className="text-blue-600 text-sm font-semibold mb-4 inline-block hover:underline">
               ← Back to Careers
            </Link>
            <br />
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Career at Ether</span>
            <h1 className="text-5xl font-extrabold text-[#1d2130] mt-4 mb-6">{job.title}</h1>
            <p className="text-gray-500 leading-relaxed mb-8">{job.description}</p>
            <button 
              onClick={() => document.getElementById('apply-form').scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-10 py-4 font-bold rounded flex items-center gap-2 hover:bg-blue-700 transition"
            >
              Apply Now <span className="text-lg">→</span>
            </button>
          </div>

          <div className="bg-[#FFEAD5] p-10 rounded-lg w-full md:w-96 relative">
            <div className="absolute top-0 right-0 flex translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-6 bg-orange-400"></div>
                <div className="w-6 h-6 bg-blue-600"></div>
            </div>
            <h3 className="text-xl font-extrabold text-[#1d2130] mb-6">Job Description</h3>
            <ul className="space-y-4 text-sm text-gray-700 font-medium">
              <li>{job.location}</li>
              <li>{job.experience}</li>
              <li>Department: {job.department}</li>
              <li>{job.positions}</li>
            </ul>
          </div>
        </div>
      </section>

    
      <section className="bg-[#EEF8F9] py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex border-b border-gray-200 mb-10 gap-10 overflow-x-auto">
            {['Details', 'Requirements', 'Responsibilities'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-lg font-bold transition-all border-b-4 ${
                  activeTab === tab ? 'border-blue-600 text-[#1d2130]' : 'border-transparent text-gray-400'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="text-gray-600 leading-relaxed min-h-[300px]">
            {activeTab === 'Details' && (
              <ul className="list-disc pl-5 space-y-4">
                <li>Create and edit video content for multi-platform use and distribution for social media channels.</li>
                <li>Design & Create highly engaging industry-related content in both photo, gif & video format</li>
                <li>Publish Posts on various social media channels</li>
                <li>Promote content on social networks and monitor engagement</li>
                <li>Research industry-related topics</li>
              </ul>
            )}
            {activeTab === 'Requirements' && (
              <ul className="list-disc pl-5 space-y-4">
                <li>3+ years of experience in similar role.</li>
                <li>Strong portfolio of design and video projects.</li>
                <li>Proficiency in Adobe Creative Suite (Premiere, After Effects, Photoshop).</li>
                <li>Excellent communication and storytelling skills.</li>
                <li>Ability to work in a fast-paced environment.</li>
              </ul>
            )}
            {activeTab === 'Responsibilities' && (
              <ul className="list-disc pl-5 space-y-4">
                <li>Collaborate with the marketing team to define content strategy.</li>
                <li>Ensure brand consistency across all visual assets.</li>
                <li>Stay up-to-date with digital media trends and tools.</li>
                <li>Analyze content performance and optimize for engagement.</li>
                <li>Manage multiple projects simultaneously from concept to delivery.</li>
              </ul>
            )}
          </div>
        </div>
      </section>

    
      <section id="apply-form" className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold text-[#1d2130] mb-12">Apply Now</h2>
          <form onSubmit={(e) => { e.preventDefault(); alert('Application submitted successfully!'); }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">First Name</label>
              <input type="text" className="bg-[#F9F9FB] p-4 rounded outline-none border focus:border-blue-300" placeholder="First Name" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Last Name</label>
              <input type="text" className="bg-[#F9F9FB] p-4 rounded outline-none border focus:border-blue-300" placeholder="Last Name" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Email Id</label>
              <input type="email" className="bg-[#F9F9FB] p-4 rounded outline-none border focus:border-blue-300" placeholder="Email Id" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Mobile No</label>
              <input type="text" className="bg-[#F9F9FB] p-4 rounded outline-none border focus:border-blue-300" placeholder="Mobile No" />
            </div>
            <div className="md:col-span-2 flex flex-col">
              <label className="text-sm font-semibold mb-2">Why do you think you are good fit for Ether?</label>
              <textarea className="bg-[#F9F9FB] p-4 rounded outline-none border focus:border-blue-300 h-32" placeholder="Your message"></textarea>
            </div>
            <div className="md:col-span-2 flex items-center gap-3 py-4">
              <input type="checkbox" className="w-5 h-5 rounded border-gray-300" id="privacy" />
              <label htmlFor="privacy" className="text-sm text-gray-500">I agree to accept the privacy policy. We will add your contact details provided in this form to our system for contacting you regarding your request.</label>
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="bg-blue-600 text-white px-12 py-4 font-bold rounded hover:bg-blue-700 transition">
                Submit Application →
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default JobDetails;
