import React from 'react';

const NickContainer = ({ nickClass, nick }) => {
    return (
        <div className={ nickClass }>
            { nick }
        </div>
    );
};

export default NickContainer;