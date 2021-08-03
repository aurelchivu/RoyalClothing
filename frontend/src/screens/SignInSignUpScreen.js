import React from 'react';

import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

import '../styles/screens/sign-in-sign-up.scss';

const SignInSignUpScreen = () => {
  return (
    <div className='sign-in-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUpScreen;
