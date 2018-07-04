import React from 'react';
import BackDrop from './BackDrop';

const Modal = (props) => {
    return (
        <div className="modal">
            <BackDrop close={() => props.close()} />
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