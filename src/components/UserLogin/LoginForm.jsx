import React from 'react';
import Submit from '../UI/Submit';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { CSSTransition } from 'react-transition-group';

const LoginForm = (props) => {
    
    let showErr = false;

    if(props.touched.email && props.errors.email) {
        showErr = true;
    }
    if(props.touched.password && props.errors.password) {
        showErr = true;
    }

    return (        
        <Form>
            <CSSTransition in={showErr} timeout={200} classNames="fade" mountOnEnter unmountOnExit>
                <div className="login-box__err-msg">
                    {props.touched.email && props.errors.email ? <p>{props.errors.email}</p> : null}
                    {props.touched.password && props.errors.password ? <p>{props.errors.password}</p> : null}
                </div>
            </CSSTransition>
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

const FormikOptions = {
    mapPropsToValues: () => {
        return {
            email: "",
            password: ""
        }
    },
    validationSchema: () => Yup.object().shape({
        email: Yup.string().email("Email is invalid!").required("Email is required!"),
        password: Yup.string().min(6, "Password min. 6 characters long!").required("Password is required!"),
    }),
    handleSubmit: (values) => {
        console.log(values);
    }
};

export default withFormik(FormikOptions)(LoginForm);