'use client'
import { useState } from 'react';


const HoverComponent = ({ img }) => {
  return (
    <div className="flex fixed bottom-10 w-52 h-96 right-10 p-4 text-white rounded-md z-50 justify-center"
         style={{ backgroundImage: `url(${img?.src})`, backgroundSize: 'cover' }}>
  
    </div>
  );
};

export const Tables = ({ year, project, technologies, link, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative ${isHovered ? 'bg-blue-500' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex py-8 px-4 space-x-4 text-2xl">
        <div className="year">{year}</div>
        <div className="project-mame">{project}</div>
        <div className="technologies">{technologies}</div>
      </div>

      {isHovered && <HoverComponent  img={image}/>}
    </div>
  );
};
