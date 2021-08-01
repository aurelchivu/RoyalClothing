import React from 'react'

import '../styles/components/custom-button.scss';

const CustomButton = ({ children, ...rest }) => (
  <button className='custom-button' {...rest}>
    {children}
  </button>
);

export default CustomButton;
