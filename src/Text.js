import React from 'react';

const Text = ({ className, text }) => {
  return (
    <h1 className={ className }>{ text }</h1>
  );
}

export default Text;