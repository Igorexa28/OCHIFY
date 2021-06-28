import React from 'react';

const Field = ({htmlFor, text, type, className, id, handleChange}) => { 
    return (
        <>
            <label htmlFor={htmlFor}>{text}</label> 
            <input type={type} className={className} id={id} onChange={handleChange} />
        </>
    );
};

export default Field;
