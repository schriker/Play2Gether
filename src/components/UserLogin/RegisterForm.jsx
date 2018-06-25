import React from 'react';
import Modal from '../UI/Modal';
import { CSSTransition } from 'react-transition-group';

const RegisterForm = (props) => {
    return (
        <CSSTransition in={props.showRegister} timeout={200} classNames="fade" mountOnEnter unmountOnExit>
            <Modal close={props.hideRegister} title="Create User">
                Test
            </Modal>
        </CSSTransition>
    );
};

export default RegisterForm;