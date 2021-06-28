import React from 'react';
import Text from './Text';
import Header from './Header';
import Button from './Button';
import '../src/styles/UserProfile.css';
import WorkContainer from './WorkContainer';
import UserContainer from './UserContainer';

const OtherUserProfile = () => {
    
    const btnsPropertiesHeader = [
        { type: "submit", id: "feedBtn", className: "feedBtn", text: "Feed" },
        { type: "submit", id: "myProfileBtn", className: "myProfileBtn activeBtn", text: "My profile" },
        { type: "submit", id: "chatsBtn", className: "chatsBtn", text: "Chats" },
        { type: "submit", id: "upgradeBtn", className: "upgradeBtn highlightBtn", text: "Upgrade" },
        { type: "submit", id: "logOutBtn", className: "logInBtn highlightBtn", text: "Log out" },
    ];

    const headerBtns = btnsPropertiesHeader.map((element, index) => {
        return (
            <Button key={index} type={element.type} id={element.id} className={element.className} text={element.text} />
        );
    });

    const workProperties = [
        { source: '1200px-Shaqi_jrvej_copy.jpg' },
        { source: '1200px-Shaqi_jrvej_copy.jpg' },
        { source: '1200px-Shaqi_jrvej_copy.jpg' },
        { source: '1200px-Shaqi_jrvej_copy.jpg' },
        { source: '1200px-Shaqi_jrvej_copy.jpg' },
        { source: '1200px-Shaqi_jrvej_copy.jpg' },
    ];

    const userWorks = workProperties.map((element, index) => {
        return <WorkContainer source={ element.source } key={ index } />
    });

    const examplesUserProfile = [
        { source: '41fEp3+jChL.jpg',  userName: 'Igorexa28', userNickName: '@destroyer228', isCreator: true,
        isSalesman: false, followers: 101, following: 36, works: 5, rate: 5.0, services: 'Programming pictures',
        myPage: false },
    ];

    const userProfile = examplesUserProfile.map((element, index) => {
        return (
            <UserContainer key={ index }  {...element}  />
        );
    })

    let resultBlock = null;

    if (userWorks.length === 0) {
        resultBlock = <p className="emptyRes" style={{ fontWeight: 'bolder' }}>There is nothing here...</p>;
    } else {
        resultBlock = userWorks;
    }
    
    return (
        <>
            <Header className="head">
                <Text className="headText" text="OCHIFY" />
                    { headerBtns }
            </Header>
            <div className="mainProfile">
                { userProfile }
                <div className="userPublications">
                    <h2 className="uploadDownload">
                        UPLOADS
                    </h2>
                    <div className="worksBlock">
                        { resultBlock }
                    </div>
                </div>
            </div>
        </>
    );
};

export default OtherUserProfile;