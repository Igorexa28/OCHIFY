import React from 'react';
import ImageContainer from './ImageContainer';

const ConversationUser = ( { source, name, message } ) => {
    return (
        <div className="userBlock">
            <ImageContainer divClass="userPhoto" source={ source } imgClass="photo" />
            <div className="userInfo">
                <div className="userName">{ name }</div>
                <div className="userMessage">{ message }</div>
            </div>
        </div>
    );
};

export default ConversationUser;