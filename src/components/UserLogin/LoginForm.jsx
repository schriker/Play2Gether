import React, { Component } from 'react';
import Submit from '../UI/Submit';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

class LoginForm extends Component {

    state = {
        formTouched: false
    }

    onFormSubmit = () => {
        this.setState({ formTouched: true });
    }

    render() { 
        return (        
            <Form>
                {this.state.formTouched && this.props.errors.email ? <p className="login-box__err-msg">{this.props.errors.email}</p>: null}
                <div className="login-box__row">
                    <Field type="text" name="email" placeholder="Email adress" />
                    <div className="login-box__input-icon"><i className="fas fa-user"></i></div>
                </div>
                {this.state.formTouched && this.props.errors.password ? <p className="login-box__err-msg">{this.props.errors.password}</p>: null}
                <div className="login-box__row">
                    <Field type="password" name="password" placeholder="Your password" />
                    <div className="login-box__input-icon"><i className="fas fa-key"></i></div>
                </div>
                <div className="login-box__row">
                    <Submit onClick={()=> this.onFormSubmit()}  isSending={this.props.isSending} value="Login" />
                    <span>or</span>
                    <a className="btn btn--grey" href="/">Sign Up</a>
                    <a className="pull-right" href="">Forgot password?</a>
                </div>
            </Form>
        )
    };
};

const FormikOptions = {
    mapPropsToValues: () => {
        return {
            email: "",
            password: ""
        }
    },
    validationSchema: () => Yup.object().shape({
        email: Yup.string().email("E-mail is not valid!").required("E-mail is required!"),
        password: Yup.string().min(6, "At least 6 characters!").required("Password is required!"),
    }),
    handleSubmit: (values) => {
        console.log(values);
    }
};

export default withFormik(FormikOptions)(LoginForm);