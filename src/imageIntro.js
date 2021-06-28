import React from 'react';
import Text from './Text';
import Button from './Button';
import Header from './Header';
import PriceBtn from './PriceBtn';
import MyComment from './myComment';
import '../src/styles/ImageIntro.css';
import '../src/styles/ReviewPage.css';
import NickContainer from './NickContainer';
import CustomerReview from './customerReview';
import ImageContainer from './ImageContainer';

const ImageIntro = () => {
    const btnsProperties = [
        {type: "submit", id: "feedBtn", className: "headerBtn feedBtn", text: "Feed"},
        {type: "submit", id: "myProfileBtn", className: "headerBtn myProfileBtn", text: "My profile"},
        {type: "submit", id: "chatsBtn", className: "headerBtn chatsBtn", text: "Chats"},
        {type: "submit", id: "upgradeBtn", className: "headerBtn logInBtn highlightBtn", text: "Upgrade"},
        {type: "submit", id: "logInBtn", className: "logInBtn", text: "Log out"},
    ];

    const headerBtns = btnsProperties.map((element, index) => {
        return <Button key={index} type={element.type} id={element.id} className={element.className} text={element.text} />
    });

    const users = [
        { nickname: 'Igorexa28', review: 'Not bad. Have a good day!', countStars: 4, date: new Date(2021, 2, 28).toLocaleDateString(), srcPhoto: 'icon-star-18.jpg' }, 
        { nickname: '@ratkingdom', review: 'Great job! Fast and cheap. Thank u, sis, xoxo)', countStars: 5, date: new Date(2021, 4, 29).toLocaleDateString() },
        { nickname: '@cynicalqueen', review: 'You didn’t catch my vision, but still not a bad work!', countStars: 3, date: new Date(2020, 7, 17).toLocaleDateString() },
    ];

    const comments = users.map((element, index) => {
        return (
            <CustomerReview nickname={element.nickname} review={element.review} countStars={element.countStars} date={element.date}  key={index} />
        );
    });

    return (
        <>
            <Header className="head">
                <Text className="headText" text="OCHIFY" />
                {headerBtns}
            </Header>
            <div className="mainContainer">
                <ImageContainer divClass="ImageCont" source="1200px-Shaqi_jrvej.jpg" imgClass="Image" />
                <div className="commentContainer">
                    <div className="authorContainer">
                        <div className="authorInfo">
                            <ImageContainer divClass="authorImage" source="462115389-Sandra-Bullock-getty-e1412325195461.jpg" imgClass="photo" />
                            <NickContainer nickClass="authorName" nick="@lifelover" />
                        </div>
                        <PriceBtn price="195.99" />
                    </div>
                    <div className="comments">
                        <MyComment />
                        <div className="userComment">
                            { comments }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ImageIntro;