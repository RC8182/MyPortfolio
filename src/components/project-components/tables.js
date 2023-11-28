'use client'
import Link from 'next/link'
import { useState } from 'react'


const HoverComponent = ({ img, link }) => {
  const containerStyle = {
    backgroundImage: `url(${img?.src})`,
    backgroundSize: 'cover',
  }

  const renderContent = () => (
    <div className="flex fixed bottom-10 w-28 h-52 md:w-52 md:h-96 right-10 p-4 rounded-md z-50 justify-center" style={containerStyle}></div>
  );

  return link === '' ? renderContent() : <Link href={link} target="_blank" rel="noopener noreferrer">{renderContent()}</Link>;
}

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

      {isHovered && <HoverComponent  img={image} link={link}/>}
    </div>
  );
};
