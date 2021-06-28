import './App.css';
import React from 'react';
import Text from './Text';
import Header from './Header';
import Button from './Button';
import '../src/styles/Feed.css';
import SearchPanel from './SearchPanel';
import WorkerBlock from './WorkerBlock';

const Feed = () => {

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

    const workers = [
        { source: 'IMG_9670.jpg', name: 'Ihor', nickName: '@destroyer228', speciality: 'Nature', mark: 5.0 },
        { source: 'vlad.jpg', name: 'Vladyslav', nickName: '@goldsilver21', speciality: 'Photoshop', mark: 5.0 },
        { source: '462115389-Sandra-Bullock-getty-e1412325195461.jpg', name: 'Sandra', nickName: '@lifeLover', speciality: 'Architecture', mark: 3.5 },
        { source: '680758960186.jpg', name: 'Emma', nickName: '@loveForever', speciality: '3D modeling', mark: 4.1 },
        { source: '41fEp3+jChL.jpg', name: 'Drake', nickName: '@happyBlack', speciality: 'Drawing', mark: 4.1 },
    ];

    const workerComponents = workers.map((element, index) => {
        return <WorkerBlock source={ element.source } name={ element.name } nickName={ element.nickName } speciality={ element.speciality } mark={ element.mark } key={index} />
    });

    return (
        <>
            <Header className="head">
                <Text className="headText" text="OCHIFY" />
                {headerBtns}
            </Header>
            <div className="mainFeed" style={{ backgroundColor: "#e5e5e5" }}>
                <SearchPanel />
                <div className="mainFeedContent" style={{ backgroundColor: "#e5e5e5" }}>
                    <div className="searchForBlock">
                        <h2 className="optionHead">Search for:</h2>
                        <ul className="filterOption">
                            <li><input type="checkbox" />Works</li>
                            <li><input type="checkbox" />Profiles</li>
                            <li><input type="checkbox" />Orders</li>
                        </ul>
                        <h3 className="typeOfArt">Type of art:</h3>
                        <select className="searchSelect">
                            <option selected>Photo</option>
                        </select>
                        <h3 className="typeOfArt">Author's rate:</h3>
                        <div className="rangeBlock">
                            <div>
                                0.0
                            </div>
                            <div>
                                <input type="range" min="0.0" max="5.0" step="0.1" />
                            </div>
                            <div>
                                5.0
                            </div>
                        </div>
                    </div>
                    <div className="adaptiveBlock">
                        <h2 className="optionHead">Sort by:</h2>
                        <ul className="sortOptions">
                            <li><input type="checkbox" />Name</li>
                            <li><input type="checkbox" />Rate</li>
                        </ul>
                        <button className="subBtn">Submit</button>
                    </div>
                    <div className="workersBlock">
                        { workerComponents }
                    </div>
                    <div className="sortByBlock">
                        <h2 className="optionHead">Sort by:</h2>
                        <ul className="sortOptions">
                            <li><input type="checkbox" />Name</li>
                            <li><input type="checkbox" />Rate</li>
                        </ul>
                        <button className="subBtn">Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Feed;