import React from 'react';

const SubBlock = ({ id, children }) => {
    return (
        <div className="subBlock" id={ id }>
            { children }
        </div>
    );
};

export default SubBlock;