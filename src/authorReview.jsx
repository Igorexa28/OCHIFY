import React from 'react';
import '../src/styles/ReviewPage.css';

const AuthorReview = () => {
    return (
        <div className="shortProfile">
            <div>
                <div className="userPhoto"></div>
                    <div className="userName">
                        <span id="name">Mikie Hara</span><br/>
                        <span id="nickName">@dreamer</span>
                    </div>
                </div>
            <div className="roles">
                <span id="creator">Creator</span> | <span id="salesman">Salesman</span>
            </div>
        </div>
    );
};

export default AuthorReview;