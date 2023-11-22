import React from 'react';

import { Divider } from '../divider';
import { projectsList } from '@/db/db';

export const Projects = () => {
  return (
    <div className='container text-white' >
      {projectsList.map((e) => (
        
        <div key={e}>
        <Divider b={'border-t-2'} my={'my-0'} color={'text-white'} />
        {e}
        </div>
      ))}
      <Divider b={'border-t-2'} my={'my-0'} color={'text-white'}/>
    </div>
  );
};
