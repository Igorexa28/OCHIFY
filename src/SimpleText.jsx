import React from 'react';

const SimpleText = ({ className, text }) => {
  return (
    <span className={ className }>{ text }</span>
  );  
}

export default SimpleText;