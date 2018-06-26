import React, { Component } from 'react';
import Submit from '../UI/Submit';
import ErrorsList from '../UI/ErrorsList';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

class LoginForm extends Component {
    render() {
        let showErr = false;
        const errorsArray = [];

        if (Object.keys(this.props.errors).length > 0)  {
            showErr = true;
            for (let key in this.props.errors) {
                errorsArray.push(this.props.errors[key]);
            }
        }

        if (Object.keys(this.props.loginErr).length > 0)  {
            showErr = true;
            errorsArray.push(this.props.loginErr.message);
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
                <div className="login-box__row">
                    <Submit isSending={this.props.loginLoading} value="Login" />
                    <span>or</span>
                    <a onClick={(e) => this.props.showRegister(e)} className="btn btn--grey" href="/">Sign Up</a>
                    <a className="pull-right" href="">Forgot password?</a>
                </div>
            </Form>
        );
    }
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