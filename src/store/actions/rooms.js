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
                [doc.id]: {
                    data: doc.data(),
                    rooms: []
                } 
            };
            if(!getState().games.thumbnails[gameId]) {
                dispatch(fetchThumbnails(gameId, rooms[gameId].data.img));
            }  
        }, (err) => dispatch(fetchRoomsFail(err)));

        firebase.firestore().collection("games").doc(gameId).collection("rooms").onSnapshot((querySnapshot) => {
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
    }
}