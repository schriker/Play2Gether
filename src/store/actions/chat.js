import * as actionType from './actionTypes';
import firebase from '../../firebase';

const fetchMessageSuccess = (data) => {
    return {
        type: actionType.FETCH_MESSAGES_SUCCESS,
        data: data
    }
}

const fetchMessageFail = (err) => {
    return {
        type: actionType.FETCH_MESSAGES_FAIL,
        err: err
    }
}

export const fethcMessage = (roomId) => {
    return dispatch => {
        firebase.firestore().collection("chats").doc(roomId).onSnapshot((doc) => {
            dispatch(fetchMessageSuccess(doc.data()))
        }, (err) => dispatch(fetchMessageFail(err)))
    }
}