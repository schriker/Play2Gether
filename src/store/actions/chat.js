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

export const fethcMessage = (gameId, roomId) => {
    return dispatch => {
        firebase.firestore().collection("chats").doc(gameId).collection(roomId).orderBy("time", "asc").onSnapshot((querySnapshot) => {

            let messages = [];

            querySnapshot.forEach((msg) => {
                messages = [
                    ...messages,
                    {
                        ...msg.data()
                    }
                ]
            })
            dispatch(fetchMessageSuccess(messages))
        }, (err) => dispatch(fetchMessageFail(err)))
    }
}

const sendMessageStart = () => {
    return {
        type: actionType.SEND_MESSAGE_START
    }
}

const sendMessageSuccess = () => {
    return {
        type: actionType.SEND_MESSAGE_SUCCESS
    }
}

const sendMessageFail = (err) => {
    return {
        type: actionType.SEND_MESSAGE_FAIL,
        err: err
    }
}

export const sendMessage = (formData, gameId, roomId) => {
    return (dispatch, getState) => {
        dispatch(sendMessageStart());
        const data = {
            uid: getState().auth.user.uid,
            author: getState().auth.user.email,
            time: firebase.firestore.FieldValue.serverTimestamp(),
            message: formData.msg
        }
        firebase.firestore().collection("chats").doc(gameId).collection(roomId).add(data)
        .then(() => dispatch(sendMessageSuccess()))
        .catch((err) => dispatch(sendMessageFail(err)));
    }
}