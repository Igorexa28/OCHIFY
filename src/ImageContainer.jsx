import React from 'react';

const ImageContainer = ( { divClass, source, imgClass } ) => {
    return (
        <div className={ divClass }>
            <img src={ source } className={ imgClass } alt="Something" />
        </div>
    );
};

export default ImageContainer;