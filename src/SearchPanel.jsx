import React, { useState } from 'react';

const SearchPanel = () => {
    const [ request, setRequest ] = useState('');

    return (
        <div className="searchPanel">
            <div className="innerSearch">
                <input type="search" placeholder="Search for everything you want..." value={ request } onChange={ (event) => setRequest(event.target.value) } />
            </div>
        </div>
    );
};

export default SearchPanel;