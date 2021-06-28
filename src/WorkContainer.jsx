import React from 'react';

const WorkContainer = ( { source:srcPath = '1200px-Shaqi_jrvej.jpg' } ) => {
    return (
        <div className="work">
            <img src={ srcPath } className="workImage" alt="User work" title="Work" />
        </div>
    );
};

export default WorkContainer;