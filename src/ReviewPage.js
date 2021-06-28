import React from 'react';
import Text from './Text';
import Button from './Button';
import Header from './Header';
import MyComment from './myComment';
import '../src/styles/ReviewPage.css';
import AuthorReview from './authorReview';
import CustomerReview from './customerReview';

const ReviewPage = () => {
    const btnsProperties = [
        {type: "submit", id: "feedBtn", className: "headerBtn feedBtn", text: "Feed"},
        {type: "submit", id: "myProfileBtn", className: "headerBtn myProfileBtn", text: "My profile"},
        {type: "submit", id: "chatsBtn", className: "headerBtn chatsBtn", text: "Chats"},
        {type: "submit", id: "upgradeBtn", className: "headerBtn logInBtn highlightBtn", text: "Upgrade"},
        {type: "submit", id: "logInBtn", className: "logInBtn", text: "Log in"},
    ];

    const headerBtns = btnsProperties.map((element, index) => {
        return <Button key={index} type={element.type} id={element.id} className={element.className} text={element.text} />
    });

    const users = [
        { nickname: 'Igorexa28', review: 'Not bad. Have a good day!', countStars: 4, date: new Date(2021, 2, 28).toLocaleDateString() },
        { nickname: '@ratkingdom', review: 'Great job! Fast and cheap. Thank u, sis, xoxo)', countStars: 5, date: new Date(2021, 4, 29).toLocaleDateString() },
        { nickname: '@cynicalqueen', review: 'You didn’t catch my vision, but still not a bad work!', countStars: 3, date: new Date(2020, 7, 17).toLocaleDateString() },
        { nickname: '@iambatman', review: 'Mikie’s picture is marvellous except she didn’t meet the deadline.', countStars: 4, date: new Date(2021, 0, 27).toLocaleDateString() },
        { nickname: '@lifelover', review: 'I like it very much, although it was made not in time.', countStars: 4, date: new Date(2021, 3, 21).toLocaleDateString() },
        { nickname: '@destroyer228', review: 'Hmmm, nothing to comment. Awful...', countStars: 2, date: new Date(2020, 2, 11).toLocaleDateString() },
        { nickname: '@vladyslav', review: 'Bull shit! This is not interesting at all!', countStars: 1, date: new Date().toLocaleDateString() } 
    ];

    const reviews = users.map((element, index) => {
        return (
            <CustomerReview nickname={element.nickname} review={element.review} countStars={element.countStars} date={element.date} key={index} />
        );
    });

    return (
        <>
            <Header className="head">
                <Text className="headText" text="OCHIFY" />
                { headerBtns }
            </Header>
            <div className="main">
                <AuthorReview />
                    <div className="comments">
                        <MyComment/>
                            <hr />
                        <h2>Reviews</h2>
                        { reviews }
                    </div>
            </div>
        </>
    );
};

export default ReviewPage;