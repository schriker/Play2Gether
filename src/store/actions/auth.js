import * as actionTypes from './actionTypes';
import firebase from '../../firebase';
import { fetchUserData } from './index';

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

const setUserData = (uid) => {
    return dispatch => {
        firebase.firestore().collection("users").doc(uid.user.uid).set({
            favGames: [],
            favRooms: []
        })
    }
}

export const authRegister = (email, password) => {
    return dispatch => {
        dispatch(registerStart());
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            dispatch(setUserData(user));
            dispatch(registerSuccess(user));
        })
        .catch((err) => dispatch(registerFail(err)))
    }
}

const logoutSuccess = () => {
    return {
        type: actionTypes.AUTH_LOGOUT,
        user: null
    }
}

export const authLogout = () => {
    return dispatch => {
        firebase.auth().signOut()
        .then(() => dispatch(logoutSuccess()))
        .catch(() => dispatch(logoutSuccess()))
    }
}

export const authStateChange = () => {
    return dispatch => {
        dispatch(authStart());
        firebase.auth().onAuthStateChanged((user) => {
        dispatch(authSuccess(user));
        if (user) {
            dispatch(fetchUserData(user.uid));
            }
        }) 
    }
}

export const showMobileSidebar = (show) => {
    return {
        type: actionTypes.SHOW_MOBILE_SIDEBAR,
        show: show
    }
}