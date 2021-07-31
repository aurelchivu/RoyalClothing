import React from 'react';

import MenuItem from './MenuItem';
import sections from '../sections';
import '../styles/components/directory.scss';

const Directory = () => {
  return (
      <div className='directory-menu'>
        {sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
  );
};

export default Directory;
