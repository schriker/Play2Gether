import * as actionType from './actionTypes';
import firebase from '../../firebase';
import { fetchThumbnails } from './index';

const fetchRoomsSuccess = (data) => {
    return {
        type: actionType.FETCH_ROOMS_SUCCESS,
        rooms: data
    }
}

const fetchRoomsFail = (err) => {
    return {
        type: actionType.FETCH_ROOMS_FAIL,
        err: err
    }
}

export const fetchRooms = (gameId) => {
    return (dispatch, getState) => {

        let rooms = {};

        firebase.firestore().collection("games").doc(gameId).onSnapshot((doc) => {
            rooms = {
                ...rooms,
                [doc.id]: {
                    data: doc.data(),
                    rooms: []
                } 
            };
            
            if(!getState().games.thumbnails[gameId]) {
                dispatch(fetchThumbnails(gameId, rooms[gameId].data.img));
            }

            firebase.firestore().collection("games").doc(gameId).collection("rooms").onSnapshot((querySnapshot) => {
            rooms[gameId].rooms = [];
            querySnapshot.forEach((doc) =>{
                rooms = {
                    ...rooms,
                    [gameId]: {
                        ...rooms[gameId],
                        rooms: [
                            ...rooms[gameId].rooms,
                            {
                                id: doc.id,
                                ...doc.data()
                            }
                        ]
                    }
                }
            });
            dispatch(fetchRoomsSuccess(rooms));
            }, (err) => dispatch(fetchRoomsFail(err)));
        }, (err) => dispatch(fetchRoomsFail(err)));
    }
}

export const filterRooms = (text) => {
    return {
        type: actionType.FILTER_ROOMS,
        searchValue: text
    }
}

export const orderRooms = (orderOption) => {
    return {
        type: actionType.ORDER_ROOMS,
        orderOption: orderOption
    }
}

const addRoomStart = () => {
    return {
        type: actionType.ADD_ROOM_START
    }
}

const addRoomSuccess = (roomId) => {
    return {
        type: actionType.ADD_ROOM_SUCCESS,
        roomId: roomId
    }
}

const addRoomFail = (err) => {
    return {
        type: actionType.ADD_ROOM_FAIL,
        err: err
    }
}

const addChat = (id) => {
    return dispatch => {
        const data = {
            messages: []
        }
        firebase.firestore().collection("chats").doc(id).set(data)
        .then(() => dispatch(addRoomSuccess(id)))
        .catch((err) => dispatch(addRoomFail(err)));
    }
}

export const addRoom = (data, gameId) => {
    return dispatch => {
        dispatch(addRoomStart());
        firebase.firestore().collection("games").doc(gameId).collection("rooms").add(data)
        .then((doc) => dispatch(addChat(doc.id)))
        .catch((err) => dispatch(addRoomFail(err)));
    }
}

export const resetRooomData = () => {
    return {
        type: actionType.RESET_ROOM_DATA
    }
}