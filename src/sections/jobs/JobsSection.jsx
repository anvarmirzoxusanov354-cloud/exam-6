import React from 'react';
import { Link } from 'react-router-dom';

const jobs = [
  { id: 'full-stack-developer', title: 'Full Stack Developer', location: 'Bengaluru', type: 'Full Time', salary: '$10K - $18K', extra: 'No equity' },
  { id: 'testing-engineer', title: 'Testing Engineer', location: 'Remote', type: 'Full Time', salary: '$08K - $10K', extra: 'No equity' },
  { id: 'hr-manager', title: 'Hr Manager', location: 'Mumbai', type: 'Fulltime', salary: '$08K - $10K', extra: '4 to 5 Yrs Exp' },
  { id: 'product-designer', title: 'Product Designer', location: 'Mumbai', type: 'Fulltime', salary: '$08K - $10K', extra: '4 to 5 Yrs Exp' },
  { id: 'wordpress-developer', title: 'Wordpress Developer', location: 'Mumbai', type: 'Full Time', salary: '$08K - $10K', extra: '4 to 5 Yrs Exp' },
  { id: 'jr-qa-tester', title: 'Jr. QA Tester', location: 'California, USA', type: 'Full Time', salary: '$14K - $23K', extra: 'No equity' },
  { id: 'sr-ux-designer', title: 'Sr. UX Designer', location: 'California, USA', type: 'Full Time', salary: '$14K - $23K', extra: 'No equity' },
  { id: 'social-media-manager', title: 'Social Media Manager', location: 'Kolkata, India', type: 'Fulltime', salary: '$5K - $8K', extra: 'Fresher' },
  { id: 'golang-developer', title: 'Golang Developer', location: 'Mumbai', type: 'Fulltime', salary: '$08K - $10K', extra: '4 to 5 Yrs Exp' },
];

const JobsSection = () => {
  return (
    <section className="bg-[#eef8f9] py-16 px-8 font-sans">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-base font-bold text-[#1d2130] mb-2">{job.title}</h3>
            <p className="text-gray-400 text-sm">{job.location} · {job.type}</p>
            <p className="text-gray-400 text-sm mb-6">{job.salary} · {job.extra}</p>
            <Link to={`/career/${job.id}`} className="text-blue-600 text-sm font-semibold hover:underline">
              Apply Now →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobsSection;
