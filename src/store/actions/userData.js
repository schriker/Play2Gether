import * as actionTypes from './actionTypes';
import firebase from '../../firebase';

const fetchUserDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_USER_DATA_SUCCESS,
        data: data
    }
}

const fetchUserDataFail = (err) => {
    return {
        type: actionTypes.FETCH_USER_DATA_FAIL,
        err: err
    }
}

export const fetchUserData = (uid) => {
    return dispatch => {
        const docRef = firebase.firestore().collection("users").doc(uid);
        docRef.get()
        .then((doc) => dispatch(fetchUserDataSuccess(doc.data())))
        .catch((err) => dispatch(fetchUserDataFail(err)))
    }
}

const addToFavSuccess = (type, favArray) => {
    return {
        type: actionTypes.ADD_TO_FAV_SUCCESS,
        content: type,
        array: favArray
    }
}

export const addToFav = ({type, array, uid}) => {
    return dispatch => {
        firebase.firestore().collection("users").doc(uid).update({
            [type]: array
        })
        .then(dispatch(addToFavSuccess(type, array)))
    }
}