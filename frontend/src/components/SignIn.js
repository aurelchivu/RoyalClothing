import React, { useState } from 'react';

import FormInput from './FormInput';
import CustomButton from './CustomButton';

import '../styles/components/sign-in.scss';

const SignIn = () => {
  const initialInputs = {
    email: '',
    password: '',
  };

  const [inputs, setInputs] = useState(initialInputs);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputs(initialInputs);
  };

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={inputs.email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={inputs.password}
          handleChange={handleChange}
          label='password'
          required
        />
        <CustomButton type='submit'>Sign In</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
