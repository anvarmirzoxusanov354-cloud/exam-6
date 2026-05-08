import React from 'react';
import Ourn1 from '../assets/Ourn1.png';

const BlogPageInner = () => {
  return (
    <div className="font-sans text-[#1d2130] bg-white">
      
     
      <div className="max-w-4xl mx-auto py-20 px-8 relative">
       
        <div className="w-5 h-5 bg-orange-200 mb-6" />
        
        
        <div className="absolute top-20 right-8 flex gap-1">
          <div className="w-6 h-6 bg-orange-400"></div>
          <div className="w-6 h-6 bg-blue-600"></div>
        </div>

        <h1 className="text-5xl font-extrabold leading-tight mb-6">
          Breaking the code How did we build our Figma plugin
        </h1>
        
        <p className="text-gray-500 text-lg mb-8 max-w-2xl">
          It is a long established fact that a reader will be distracted by the readable content of a 
          page when looking at its layout. The Maker is a decentralized. We aim to attain the 
          greatest satisfaction for our clients
        </p>

        <div className="flex items-center gap-4">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Author" className="w-10 h-10 rounded-full" />
          <div className="text-sm">
            <p className="font-bold">Andrew Jonson</p>
            <p className="text-gray-400">Posted on 27th January 2021</p>
          </div>
        </div>
      </div>

    
      <div className="max-w-6xl mx-auto px-8 mb-20 relative">
        <img src={Ourn1} alt="Blog Hero" className="w-full h-[500px] object-cover rounded-sm" />
       
        <div className="absolute bottom-0 left-8 right-8 h-4 flex">
          <div className="w-2/3 h-full bg-transparent"></div>
          <div className="w-1/6 h-full bg-orange-400"></div>
          <div className="w-1/6 h-full bg-blue-600"></div>
        </div>
      </div>

      
      <div className="max-w-3xl mx-auto px-8 pb-20">
        <h2 className="text-3xl font-extrabold mb-8">
          Transform Your Idea Into Reality with Ether a Leading Digital Agency
        </h2>
        
        <div className="space-y-6 text-gray-600 leading-relaxed text-sm">
          <p>
            Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, 'Designing voice and tone for error messages.
          </p>
          
          <p>
            Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged.
          </p>
            
            <p>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged.
            </p>


            <p>
              Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, 'Designing voice.
            </p>


          <h2 className="text-3xl font-extrabold text-[#1d2130] py-4">
            Transform Your Idea Into Reality with Ether a Leading Digital Agency
          </h2>

          <div className="space-y-2">
            <p>Step 1: Download the plugin from Figma community, search Ghost UXWriter</p>
            <p>Step 2: Open the plugin on your artboard</p>
            <p>Step 3: Search for your copy or look through the different categories of the copies</p>
            <p>Step 4: Select the type of error you are looking for. You will get three different copies for each error</p>
            <p>Step 5: Tap on the cards to insert text in your frames</p>
            <p>And you are all geared up to make your UX copies more fun and exciting 😎</p>
          </div>

          <h2 className="text-3xl font-extrabold text-[#1d2130] py-4">
            Transform Your Idea Into Reality with Ether a Leading Digital Agency
          </h2>

          <p>
            Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to 
            get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin 
            for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies 
            cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The 
            intention to build this Figma plugin originated from our Medium blog post, 'Designing voice and tone for 
            error messages.
          </p>
        </div>
      </div>

    </div>
  );
};

export default BlogPageInner;
