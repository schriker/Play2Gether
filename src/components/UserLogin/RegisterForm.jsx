import React from 'react';
import Modal from '../UI/Modal';
import Submit from '../UI/Submit';
import ErrorsList from '../UI/ErrorsList';
import * as Yup from 'yup';
import { CSSTransition } from 'react-transition-group';
import { withFormik, Form, Field } from 'formik';

const RegisterForm = (props) => {

    let showErr = false;

    if(Object.keys(props.errors).length > 0) {
        showErr = true;
    }

    return (
        <CSSTransition in={props.showRegister} timeout={200} classNames="fade" mountOnEnter unmountOnExit>
            <Modal close={props.hideRegister} title="Create User">
                <Form className="login-box__register">
                    <ErrorsList errors={props.errors} showErr={showErr} />
                    <div className="login-box__row">
                        <Field type="text" name="email" placeholder="Email adress" />
                        <div className="login-box__input-icon"><i className="fas fa-user"></i></div>
                    </div>
                    <div className="login-box__row">
                        <Field type="password" name="password" placeholder="Your password" />
                        <div className="login-box__input-icon"><i className="fas fa-key"></i></div>
                    </div>
                    <div className="form__row">
                        <Field type="checkbox" name="privacy" id="privacy" />
                        <label htmlFor="privacy">Agree terms of use.</label>
                    </div>
                    <div className="login-box__row">
                        <Submit isSending={props.isSending} value="Login" />
                    </div>
                </Form>
            </Modal>
        </CSSTransition>
    );
};

const formikOptions = {
    mapPropsToValues: () => {
        return {
            email: "",
            password: "",
            privacy: false
        }
    },
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: () => Yup.object().shape({
        email: Yup.string().email("Email is invalid!").required("Email is required!"),
        password: Yup.string().min(6, "Password min. 6 characters long!").required("Password is required!"),
        privacy: Yup.boolean().oneOf([true], "Must agree!")
    }),
    handleSubmit: (values) => {
        console.log(values);
    }
}

export default withFormik(formikOptions)(RegisterForm);