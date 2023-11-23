'use client'
import Link from 'next/link';
import { useState } from 'react';


const HoverComponent = ({ img }) => {
  return (
    <div className="flex fixed bottom-10 w-28 h-52 md:w-52 md:h-96 right-10 p-4 rounded-md z-50 justify-center"
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
        <Link href={link} target="_blank" rel="noopener noreferrer">
        <div className="project-mame">{project}</div>
        </Link>
        <div className="technologies">{technologies}</div>
      </div>

      {isHovered && <HoverComponent  img={image}/>}
    </div>
  );
};
