import React from 'react';

const PriceBtn = ({ price }) => {
    return (
        <div className="btnContainer">
            <button className="buyBtn">Price ${price}</button>
        </div>
    );
};

export default PriceBtn;