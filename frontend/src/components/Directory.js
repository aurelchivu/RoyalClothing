import React from 'react';

import MenuItem from './MenuItem';
import sections from '../data/sections';
import '../styles/components/directory.scss';

const Directory = () => {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...rest }) => (
        <MenuItem key={id} {...rest} />
      ))}
    </div>
  );
};

export default Directory;
