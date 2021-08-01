import React from 'react'

import '../styles/components/custom-button.scss';

const CustomButton = ({ children, isGoogleSignIn, ...rest }) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...rest}
  >
    {children}
  </button>
);

export default CustomButton;
