import React from 'react';
import Text from './Text';
import Header from './Header';
import Button from './Button';
import '../src/styles/Premium.css';

const Premium = () => {

    const btnsProperties = [
        {type: "submit", id: "feedBtn", className: "headerBtn feedBtn", text: "Feed"},
        {type: "submit", id: "myProfileBtn", className: "headerBtn myProfileBtn", text: "My profile"},
        {type: "submit", id: "chatsBtn", className: "headerBtn chatsBtn", text: "Chats"},
        {type: "submit", id: "upgradeBtn", className: "headerBtn upgradeBtn activeBtn", text: "Upgrade"},
        {type: "submit", id: "logInBtn", className: "logInBtn", text: "Log in"},
    ];

    const headerBtns = btnsProperties.map((element, index) => {
        return (
            <Button key={index} type={element.type} id={element.id} className={element.className} text={element.text} />
        );
    });

    return (
        <>
            <Header className="head">
                <Text className="headText" text="OCHIFY" />
                    {headerBtns}
            </Header>
            <div className="mainPremium">
                <div className="mainWord">
                    <span>OCHIFY</span> <span>PREMIUM</span></div>
                <div className="mainDesc"><center>Upgrade to OCHIFY premium to</center> <center>get the best experience</center></div>
                <div className="btnBlock"><button>Start your free week</button></div>
                <div className="premiumDesc">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                        </svg> Receive notifications on email about updates</div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                        </svg> Upload all pictures from the page without watermark and quality distortion</div>
                </div>
            </div>
        </>
    );
}

export default Premium;
