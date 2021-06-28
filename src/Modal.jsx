import React from 'react';
import ReactDom from 'react-dom';
import '../src/styles/Modal.css';

const Modal = ({ open, children, onClose, classModal }) => {
    if (!open) return null;

    return ReactDom.createPortal(
        <>
            <div className="overlay_styles">
                <div className={ classModal }>
                    <div className="flexC">
                        <button onClick={ onClose } className="closeBtn">
                            <img src="cancel.svg" height="30px" width="30px" alt="Close button" />
                        </button>
                    </div>
                    { children }
                </div>
            </div>
        </>,
        document.getElementById('root')
    );
};

export default Modal;