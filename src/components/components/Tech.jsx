import React from "react";

import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";

const TechCard = ({ icon, name }) => (
  <div className='flex flex-col items-center justify-center w-40 h-40 bg-gradient-to-r from-purple-800 via-purple-700 to-black shadow-xl rounded-xl p-4 hover:scale-105 transition-transform duration-300 ease-in-out'>
    <img src={icon} alt={name} className='w-16 h-16 object-contain mb-3' />
    <p className='text-white text-lg font-semibold'>{name}</p>
  </div>
);

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 p-5'>
      {technologies.map((technology) => (
        <TechCard key={technology.name} {...technology} />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
