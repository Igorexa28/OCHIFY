import Text from './Text';
import Button from './Button';
import Header from './Header';
import '../src/styles/Chat.css';
import '../src/styles/Common.css';
import React, { useState } from 'react';
import ConversationUser from './ConversationUser';

const Chat = () => {
    const [ message, setMessage ] = useState('');

    const btnsPropertiesHeader = [
        { type: "submit", id: "feedBtn", className: "headerBtn feedBtn activeBtn", text: "Feed" },
        { type: "submit", id: "myProfileBtn", className: "headerBtn myProfileBtn", text: "My profile" },
        { type: "submit", id: "chatsBtn", className: "headerBtn chatsBtn", text: "Chats" },
        { type: "submit", id: "upgradeBtn", className: "upgradeBtn highlightBtn", text: "Upgrade" },
        { type: "submit", id: "logOutBtn", className: "logInBtn highlightBtn", text: "Log out" },
    ];

    const headerBtns = btnsPropertiesHeader.map((element, index) => {
        return (
            <Button key={ index } type={ element.type } id={ element.id } className={ element.className } text={ element.text } />
        );
    });

    const converProperties = [
        { source: '462115389-Sandra-Bullock-getty-e1412325195461.jpg', name: 'Sandra', message: 'Wow, amazing work!' },
        { source: '41fEp3+jChL.jpg', name: 'Drake', message: 'I have a suggestion for you)' },
        { source: '680758960186.jpg', name: 'Emma', message: 'Hey! Can you help me?' },
        { source: '03c8bd86ad643616f842fc51234ff994.jpg', name: 'Lana', message: 'OMG! I am speachless... This is amazing!' },
        { source: 'IMG_9670.JPG', name: 'Ihor', message: 'What are you going to do? When I see my work?' },
    ];

    const converBlocks = converProperties.map((element, index) => {
        return (
            <ConversationUser {...element} key={ index } />
        );
    });

    function handlerSubmit() {
        
        if (message.length === 0) {
            document.querySelector('textarea').placeholder = 'Enter your message here...';
            document.querySelector('textarea').focus();
        } else {
            let date = new Date();

            let outerDiv = document.createElement('div');
            outerDiv.className = 'outerDiv';

            const messageBlock = document.createElement('div');
            messageBlock.className = 'messageBlock'; 
            messageBlock.textContent = message;
            
            const timeDiv = document.createElement('div');
            timeDiv.className = 'timeBlock';
            timeDiv.textContent = `${date.toLocaleTimeString().slice(0, 5)}`;

            outerDiv.append(messageBlock);
            outerDiv.append(timeDiv);

            document.querySelector('.messageField').append(outerDiv);

            setMessage('');
            document.querySelector('textarea').placeholder = 'Write a message here...';
            document.querySelector('textarea').value = '';
        }        
    }

    return (
        <>
            <Header className="head">
                <Text className="headText" text="OCHIFY" />
                { headerBtns }
            </Header>
            <div className="mainChat">
                <div className="listOfUsers">
                    { converBlocks }
                </div>
                <div className="sendMessageCont">
                    <div className="messageField"></div>
                    <div className="sendPanel">
                        <div className="attachBlock">
                            <button>
                                <img src="paper-clip.svg" height="80px" alt="Attach" title="Attach your file" />
                            </button>
                        </div>
                        <div className="textBlock">
                            <textarea placeholder="Write a message here..." onChange={ ( event ) => setMessage(event.target.value) } />
                        </div>
                        <div className="sendBlock">
                            <button onClick={ handlerSubmit }>
                                <img src="497450-200.png" alt="Send" title="Send your message" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chat;