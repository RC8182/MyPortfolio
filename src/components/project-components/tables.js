'use client'
import { useState } from 'react';

const HoverComponent = ({ content }) => {
  return <div className="fixed bottom-10 w-52 h-96 right-10 p-4 bg-blue-500 text-white">{content}</div>;
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

      {isHovered && <HoverComponent content={project}/>}
    </div>
  );
};
