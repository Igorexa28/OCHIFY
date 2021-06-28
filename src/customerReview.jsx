import React from 'react';
import ImageContainer from './ImageContainer';

const CustomerReview = ( { nickname, review, countStars, date, srcPhoto } ) => {

    function printStars(object, number) {
        const result = [];

        for (let index = 0; index < number; index++) {
            const element = (
                <div>
                    <img src={object.src} height={object.height} width={object.width} alt={object.alt} data-value={index + 1} />
                </div>   
            );
            
            result[index] = element;
        }

        return result;
    }

    const star = {
        src: '../icon-star-18.jpg',
        height: '25',
        width: '25',
        alt: 'star'
    };

    const stars = printStars(star, countStars);

    return (
        <div className="customerReview">
            <div className="customerInfo">
            <ImageContainer divClass="divForPhoto" source="03c8bd86ad643616f842fc51234ff994.jpg" imgClass="photo" />
                <div className="review">
                    <div className="customerNick">{ nickname }</div>
                    <textarea className="reviewArea" value={ review } disabled />
                </div>
            </div>
            <div className="customerMark">
                <div className="star">{ stars }</div>
                <div className="date">{ date }</div>
            </div>
        </div>
    );
};

export default CustomerReview;