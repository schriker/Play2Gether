import React from 'react';
import Modal from '../UI/Modal';
import Submit from '../UI/Submit';
import ErrorsList from '../UI/ErrorsList';
import * as Yup from 'yup';
import { CSSTransition } from 'react-transition-group';
import { withFormik, Form, Field } from 'formik';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

const RegisterForm = (props) => {
        let showErr = false;
        const errorsArray = [];

        if (Object.keys(props.errors).length > 0)  {
            showErr = true;
            for (let key in props.errors) {
                errorsArray.push(props.errors[key]);
            }
        }

        if (Object.keys(props.registerErr).length > 0)  {
            showErr = true;
            errorsArray.push(props.registerErr.message);
        }
    
        return (
            <CSSTransition in={props.showRegister} timeout={200} classNames="fade" mountOnEnter unmountOnExit>
                <Modal close={props.hideRegister} title="Create User">
                    <Form className="login-box__register">
                        <ErrorsList errors={errorsArray} showErr={showErr} />
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
                            <Submit isSending={props.registerLoading} value="Sign up" />
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
    validationSchema: () => Yup.object().shape({
        email: Yup.string().email("Email is invalid!").required("Email is required!"),
        password: Yup.string().min(6, "Password min. 6 characters long!").required("Password is required!"),
        privacy: Yup.boolean().oneOf([true], "Must agree!")
    }),
    handleSubmit: (values, api) => {
        api.props.authRegister(values.email, values.password);
    },
    validateOnBlur: false,
    validateOnChange: false
}

const mapStateToProps = (state) => {
    return {
        registerLoading: state.auth.registerLoading,
        registerErr: state.auth.registerErr
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authRegister: (email, password) => dispatch(actions.authRegister(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withFormik(formikOptions)(RegisterForm));