import React from 'react';

const WorkerBlock = ( { source:pathSrc = '41fEp3+jChL.jpg', name:workerName = 'Def Name', nickName:nick = 'Def nickname', speciality:typeWork = 'Def speciality', mark:workerMark = 0.0 } ) => {
    return (
        <div className="workerBlock">
            <div className="workerImage">
                <img src={ pathSrc } className="workerImg" alt="Salesman" />
            </div>
            <div className="workerInfo">
                <div>{ workerName }</div>
                <div>{ nick }</div>
                <div style={{ fontStyle: 'italic' }} >{ typeWork }</div>
                <div>{ workerMark }</div>
            </div>
            <div className="workerBtns">
                <button>View Profile</button>
                <button>Message</button>
            </div>
        </div>
    );
};

export default WorkerBlock;