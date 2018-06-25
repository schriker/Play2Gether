import React from 'react';
import Submit from '../UI/Submit';
import ErrorsList from '../UI/ErrorsList';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const LoginForm = (props) => {
    
    let showErr = false;

    if(Object.keys(props.errors).length > 0) {
        showErr = true;
    }

    return (        
        <Form>
            <ErrorsList errors={props.errors} showErr={showErr} />
            <div className="login-box__row">
                <Field type="text" name="email" placeholder="Email adress" />
                <div className="login-box__input-icon"><i className="fas fa-user"></i></div>
            </div>
            <div className="login-box__row">
                <Field type="password" name="password" placeholder="Your password" />
                <div className="login-box__input-icon"><i className="fas fa-key"></i></div>
            </div>
            <div className="login-box__row">
                <Submit isSending={props.isSending} value="Login" />
                <span>or</span>
                <a onClick={(e) => props.showRegister(e)} className="btn btn--grey" href="/">Sign Up</a>
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
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: () => Yup.object().shape({
        email: Yup.string().email("Email is invalid!").required("Email is required!"),
        password: Yup.string().min(6, "Password min. 6 characters long!").required("Password is required!")
    }),
    handleSubmit: (values) => {
        console.log(values);
    }
};

export default withFormik(formikOptions)(LoginForm);