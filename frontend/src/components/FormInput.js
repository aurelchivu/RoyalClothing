import React from 'react';

import '../styles/components/form-input.scss';

const FormInput = ({ handleChange, label, ...rest }) => {
  return (
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...rest} />
      {label && (
        <label
          className={`${rest.value.length ? 'shrink' : ''} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
