import React from 'react';

const Modal = (props) => {
    return (
        <div class="modal">
            <div onClick={props.close} className="modal__backdrop"></div>
            <div class="modal__box">
                <div class="modal__header">
                    {props.title}<i onClick={props.close} class="fas fa-times"></i>
                </div>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;