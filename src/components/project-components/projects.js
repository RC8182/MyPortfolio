import React from 'react';
import { Tables } from './tables';
import { Divider } from '../divider';

export const Projects = () => {
  const table = [
    <Tables 
        key={''}
        year={'2020'}
        project={'Notas'}
        technologies={'React, Node Express, Docker'}/>,
    <Tables 
    key={''}
    year={'2021'}
    project={'Weather App'}
    technologies={'React, Node Express, Docker'}/>,
    <Tables 
    key={''}
    year={'2023'}
    project={'CV'}
    technologies={'React, Node Express, Docker'}/>,
    ];

  return (
    <div className='container text-white' >
      {table.map((e) => (
        
        <div key={e}>
        <Divider b={'border-t-2'} my={'my-0'} color={'text-white'} />
        {e}
        </div>
      ))}
      <Divider b={'border-t-2'} my={'my-0'} color={'text-white'}/>
    </div>
  );
};
