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

const favGameSuccess = (favGames) => {
    return {
        type: actionTypes.FAV_GAME_SUCCESS,
        favGames: favGames
    }
}

export const favGame = (favGames, uid) => {
    return dispatch => {
        firebase.firestore().collection("users").doc(uid).update({
            favGames: favGames
        })
        .then(dispatch(favGameSuccess(favGames)))
    }
}