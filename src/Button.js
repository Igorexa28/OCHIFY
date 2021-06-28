import React from 'react';

const Button = ({ type, id, className, text }) => {
  return (
    <button type={ type } id={ id } className={ className } >
      { text }
    </button>
  );
}

export default Button;
