import React, { useState } from 'react';
import ImageContainer from './ImageContainer';

const MyComment = () => {
    const [ comment, setComment ] = useState('');

    function handleClick(event) {
        setComment(event.target.value);
    }

    function sendComment() {
        const commentTag = document.getElementById('reviewArea');

        if ( comment.length === 0 ) {
            commentTag.placeholder = 'Please, enter you comment here...';
            commentTag.focus();
        } else if ( comment.length > 0 ) {
            commentTag.placeholder = 'Type your review here...';

            const userComment = `User comment: ${comment}`;
            console.log(userComment);
            setComment('');
        }
    }

    function printStars(object = star, number = 5) {
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

    const stars = printStars(star);

    return (
        <div id="myReview">
            <div id="photoAndInput">
                <ImageContainer divClass="myPhoto" source="41fEp3+jChL.jpg" imgClass="Photo"  />
                <div id="textArea">
                    <textarea id="reviewArea" value={ comment } placeholder="Type your review here..." onChange={handleClick} />
                </div>
            </div>
                <div id="ratingAndSend">
                    <div id="stars">
                        { stars }
                    </div>
                    <div id="sendBtn">
                        <img src="../497450-200.png" height="40" width="auto" alt="Send button" onClick={sendComment} />
                    </div>
                </div>
        </div>
    );
};

export default MyComment;