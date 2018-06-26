import * as actionTypes from './actionTypes';
import firebase from '../../firebase';

const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

const authSuccess = (user) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        user: user
    }
}

const authFail = (err) => {
    return {
        type: actionTypes.AUTH_FAIL,
        err: err
    }
}

export const authLogin = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => dispatch(authSuccess(user)))
        .catch((err) => dispatch(authFail(err)))
    }
}

const registerStart = () => {
    return {
        type: actionTypes.REGISTER_START
    }
}

const registerSuccess = (user) => {
    return {
        type: actionTypes.REGISTER_SUCCESS,
        user: user
    }
}

const registerFail = (err) => {
    return {
        type: actionTypes.REGISTER_FAIL,
        err: err
    }
}

export const authRegister = (email, password) => {
    return dispatch => {
        dispatch(registerStart());
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => dispatch(registerSuccess(user)))
        .catch((err) => dispatch(registerFail(err)))
    }
}