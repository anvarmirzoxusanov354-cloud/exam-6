import React from 'react';
import Logus1 from "../../assets/Logus1.svg"
import Logus2 from "../../assets/Logus2.svg"
import Logus3 from "../../assets/Logus3.svg"
import Logus4 from "../../assets/Logus4.svg"
import Logus5 from "../../assets/Logus5.svg"

const PartnersBar = () => {
  return (
    <section className="max-w-7xl mx-auto px-30 py-2 bg-[#FAFAFC]">
      <div className="flex flex-wrap items-center justify-between gap-8 ">
        
        <div className="flex items-center gap-2">
          <img src={Logus1} alt="logo" className="h-18 w-auto" />
        </div>

        <div className="flex items-center gap-2">
          <img src={Logus2} alt="logo" className="h-18 w-auto" />
        </div>

        <div className="flex items-center gap-2">
          <img src={Logus3} alt="logo" className="h-18 w-auto" />
        </div>

        <div className="flex items-center gap-2">
          <img src={Logus4} alt="logo" className="h-18 w-auto" />
        </div>
        
         <div className="flex items-center gap-2">
          <img src={Logus5} alt="logo" className="h-18 w-auto" />
        </div>
      </div>
    </section>
  );
};

export default PartnersBar;
