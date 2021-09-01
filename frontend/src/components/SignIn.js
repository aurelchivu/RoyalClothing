import React, { useState } from 'react';

import FormInput from './FormInput';
import CustomButton from './CustomButton';

import '../styles/components/sign-in.scss';

import { auth, signInWithGoogle } from '../firebase/firebase.utils';

const SignIn = () => {
  const initialInputs = {
    email: '',
    password: '',
  };

  const [inputs, setInputs] = useState(initialInputs);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = inputs;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      setInputs(initialInputs);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const { email, password } = inputs;

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='password'
          required
        />
        <div className='button'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
