import React from 'react';
import Submit from '../UI/Submit';
import ErrorsList from '../UI/ErrorsList';
import Button from '../UI/Button';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

const LoginForm = (props) => {
        let showErr = false;
        const errorsArray = [];

        if (Object.keys(props.errors).length > 0)  {
            showErr = true;
            for (let key in props.errors) {
                errorsArray.push(props.errors[key]);
            }
        }

        if (Object.keys(props.loginErr).length > 0)  {
            showErr = true;
            errorsArray.push(props.loginErr.message);
        }

        return (        
            <Form>
                <ErrorsList errors={errorsArray} showErr={showErr} />
                <div className="login-box__row">
                    <Field type="text" name="email" placeholder="Email adress" />
                    <div className="login-box__input-icon"><i className="fas fa-user"></i></div>
                </div>
                <div className="login-box__row">
                    <Field type="password" name="password" placeholder="Your password" />
                    <div className="login-box__input-icon"><i className="fas fa-key"></i></div>
                </div>
                <div className="login-box__row login-box__buttons">
                    <Submit isSending={props.loginLoading} value="Login" />
                    <span>or</span>
                    <Button value="Sign Up" type="grey" clicked={() => props.showRegister()} />
                    <a className="pull-right" href="">Forgot password?</a>
                </div>
            </Form>
        );
};

const formikOptions = {
    mapPropsToValues: () => {
        return {
            email: "",
            password: ""
        }
    },
    validationSchema: () => Yup.object().shape({
        email: Yup.string().email("Email is invalid!").required("Email is required!"),
        password: Yup.string().min(6, "Password min. 6 characters long!").required("Password is required!")
    }),
    handleSubmit: (values, api) => {
        api.props.authLogin(values.email, values.password);
    },
    validateOnBlur: false,
    validateOnChange: false
};

const mapStateToProps = (state) => {
    return {
        loginLoading: state.auth.loginLoading,
        loginErr: state.auth.loginErr
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authLogin: (email, password) => dispatch(actions.authLogin(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withFormik(formikOptions)(LoginForm));