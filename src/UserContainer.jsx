import React, { useState } from 'react';
import Modal from './Modal';
import ImageContainer from './ImageContainer';
import { resolveModuleName } from 'typescript';

const UserContainer = ( { source,  userName, userNickName, isCreator = false, isSalesman = false, followers = 10, following = 0, works = 0, rate = 0, services = 'Photo', myPage = true } ) => {
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [isOpenUpload, setIsOpenUpload] = useState(false);

    const contentOfMyBtns = [ 
        { content:'Edit Profile', 
            handler: function() {
                setIsOpenEdit(true);
            } 
        },
        { content:'Upload image',
            handler: function() {
                setIsOpenUpload(true); 
            } 
        },
        { content:'Review', 
            handler: function() {
                alert('Review is being opening!') 
            } 
        }, 
    ];
        
    const contentOfOtherBtns = [ 
            { content: 'Follow',
                handler: function() {
                        let number = +(document.querySelectorAll('span')[4].textContent);
                        document.querySelectorAll('span')[4].textContent = ++number;

                    return 'The number of followers was increased...';
            } 
        },
            { content: 'Message',
                handler: function() {
                    alert('Navigation to the Message page...');
                }
        },
            { content: 'Review', 
                handler: function() {
                    alert('Navigation to the Review page...');
            }
        },
    ];

    let pageBtns = null;

    if ( myPage ) {
        pageBtns = contentOfMyBtns.map(( element, index ) => {
            return (
                <button key={ index } onClick={ element.handler }>{ element.content }</button>
            );
        });
        
    } else {
        pageBtns = contentOfOtherBtns.map((element, index) => {
            return (
                <button key={ index } onClick={ element.handler }>{ element.content } { element.count }</button>
            );
        });
    }

    function handleSubmitEdit(event) {
        event.preventDefault();

        const result = gatherInfoEdit();

        document.getElementById('firstName').value = '';
        document.getElementById('secondName').value = '';
        document.getElementById('nickName').value = '';
        document.getElementById('service').options[0].selected = true;
        document.getElementsByName('userRole')[0].checked = false; 
        document.getElementsByName('userRole')[1].checked = false; 

        console.log(JSON.stringify(result));
    }

    function gatherInfoEdit() {
        const userName = document.getElementById('firstName').value || '',
            userSecondName = document.getElementById('secondName').value || '',
            userNickname = document.getElementById('nickName').value || '',
            userService = getCheckedValues('service'),
            userRoles = getCheckedFlags();

        const response = {
            firstName: userName,
            secondName: userSecondName,
            nickName: userNickname,
            service: userService,
            roles: userRoles,
        };

        return response;
    }

    function getCheckedFlags() {
        const array = document.getElementsByName('userRole');
        const result = [];

        for (let i = 0; i < array.length; i++) {
            if (array[i].checked) {
                let element = array[i].value;
                result.push(element);
            }
        }

        return result.length ? result : 'Nothing checked';
    }

    function getCheckedValues(element) {
        const rolesArray = document.getElementById(element);
        const result = [];

        for (let i = 0; i < rolesArray.length; i++) {
            if (rolesArray[i].selected) {
                let element = rolesArray[i].value;
                result.push(element);
            }
        }

        return result.length ? result : 'Nothing selected';
    }

    function handleSubmitUpload(event) {
        event.preventDefault();
        
        const response = gatherInfoUpload();

        document.getElementById('price').value = '';
        document.getElementById('nameWork').value = '';
        document.getElementById('description').value = '';
        document.getElementById('typeWork').options[0].selected = true;

        console.log(response);
    }

    function gatherInfoUpload() {
        const nameOfWork = document.getElementById('nameWork').value || '',
            descriptionOfWork = document.getElementById('description').value || '',
            priceOfWork = document.getElementById('price').value || 0,
            typeOfWork = getCheckedValues('typeWork');

        return {
            name: nameOfWork,
            type: typeOfWork,
            price: priceOfWork,
            description: descriptionOfWork,
        };
    }

    return (
    <>
        {/* This modal window for action - edit profile */}
        <Modal open={isOpenEdit} classModal="modal_styles_edit" onClose={() => setIsOpenEdit(false)}>
            <h2 className="headerModalEdit">Profile editing</h2>
                <div className="outerContainer">
                    <form className="editForm" onSubmit={ handleSubmitEdit }>
                        <div style={{ display: "flex", width: "100%" }} className="commonBlock">
                            <div className="outerName">
                                <label className="editLabel">First name</label>
                                <input type="text" className="editInput" id="firstName" placeholder="Julia X" minLength="3" maxLength="15" required />
                                <label className="editLabel">Second name</label>
                                <input type="text" className="editInput" id="secondName" placeholder="Bortom" minLength="3" maxLength="15"  required />
                            </div>
                            <div className="outerNick">
                                <label className="editLabel">Nickname</label>
                                <input type="text" className="editInput" id="nickName" placeholder="@lifelover" minLength="3" maxLength="15" required />
                                <label className="editLabel">Services</label>
                                <select id="service">
                                    <option value="architect">Architect Design</option>
                                    <option value="nature">Nature</option>
                                    <option value="animals">Animals</option>
                                </select>
                            </div>
                        </div>
                        <div className="roleBlock">
                            <h3 style={{ fontWeight: "bolder", textAlign: "center", paddingTop: "13px" }}>Role</h3>
                            <div className="roleChoice">
                                <ul style={{ listStyleType: "none", display: "flex", width: "auto"}} id="roles">
                                    <li><input type="checkbox" value="creator" name="userRole" />Creator</li>
                                    <li><input type="checkbox" value="salesman" name="userRole" />Salesman</li>
                                </ul>
                            </div>
                        </div>
                        <button onClick={ gatherInfoEdit }>Confirm</button>
                </form>   
            </div>
        </Modal>

        {/* * This modal window for action - Upload image */}
        <Modal open={isOpenUpload} classModal="modal_styles_upload" onClose={() => setIsOpenUpload(false)}>
            <h2 className="headerModalUpload">Image uploading</h2>
            <form onSubmit={ handleSubmitUpload }>
                <div className="nameTypeDescBlock">
                    <div className="nameTypeBlock">
                        <label className="uploadLabel">Name</label>
                        <input type="text" id="nameWork" className="uploadInput" name="imageName" minLength="1" maxLength="50" required />
                        <label className="uploadLabel">Type</label>
                        <select id="typeWork">
                            <option value="architect">Architect Design</option>
                            <option value="nature">Nature</option>
                            <option value="animals">Animals</option>
                        </select>
                    </div>
                    <div className="descBlock">
                        <label className="uploadLabel">Description</label>
                        <textarea name="imageTextArea" id="description" className="imageTextArea" minLength="5" maxLength="300" required />
                    </div>
                </div>
                <div className="choosePriceBlock">
                    <div className="imgWtrContainer">
                        <label className="uploadLabel">Choose:</label>
                        <div className="imageWaterBlock">
                            <div className="includeLabel">
                                <input type="file" id="imageFile" className="hide" />
                                    <label className="labelForFile" htmlFor="imageFile">
                                        <div className="circle">
                                            <img src="paper-clip.svg" className="attachFile" alt="Attachment" title="Attachment file" />
                                        </div>
                                        <div className="text">Image</div>
                                </label>
                            </div>
                            <div className="includeLabel">
                                <input type="file" id="waterFile" className="hide" /> 
                                    <label className="labelForFile" htmlFor="waterFile">
                                        <div className="circle">
                                            <img src="image 4.svg" className="watermarkFile" alt="Watermark" title="Watermark image" />
                                        </div>
                                        <div className="text second">Watermark</div>
                                    </label>
                            </div>
                        </div>
                    </div>
                    <div className="priceSubmitBlock">
                        <label className="uploadLabel">Price</label>
                        <input type="number" id="price" className="uploadInputPrice" min="0" max="10000" />
                        <button className="uploadBtn" onClick={ gatherInfoUpload }>Submit</button>
                    </div>
                </div>
            </form>
        </Modal>

        <div className="userInformation">
        <ImageContainer source={ source } divClass="userContPhoto" imgClass="userPicture" />
            <div className="userContInfo">
                <div className="userNameNick">
                    <div className="NameNick">
                        <span>{ userName }</span> <span>{ userNickName }</span>
                    </div>
                    <div className="userRole">
                        <span style={isCreator ? { fontWeight: 'bolder' } : { fontWeight: 'normal' }}>Creator</span> | 
                        <span style={ isSalesman ? { fontWeight: 'bolder'} : { fontWeight: 'normal' }}>Salesman</span>
                    </div>
                </div>
                <div className="userStatistics">
                    <div className="userFollowers">Followers: <span>{ followers }</span></div>
                    <div>Following: <span>{ following }</span></div>
                    <div>Works: <span>{ works }</span></div>
                    <div className="userRate">Rate: <span>{ rate }</span></div>
                </div>
                <div className="userServices">
                    <div>Services: <span>{ services }</span></div>
                </div>
                <div className="actionBtns">
                    { pageBtns }
                </div>
            </div>
        </div>
    </>
    );
};

export default UserContainer;