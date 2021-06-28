import React from 'react';

const Form = ({ handleSubmit, className, children }) => {
  return (
    <form onSubmit={ handleSubmit } className={ className }>
      { children }
    </form>
  );
}

export default Form;