import React from 'react';

const Modal = (props) => {
    return (
        <div className="modal">
            <div onClick={props.close} className="modal__backdrop"></div>
            <div className="modal__box">
                <div className="modal__header">
                    {props.title}<i onClick={props.close} className="fas fa-times"></i>
                </div>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;