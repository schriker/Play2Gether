import * as actionTypes from './actionTypes';
import firebase from '../../firebase';

const fetchGamesStart = () => {
    return {
        type: actionTypes.FETCH_GAMES_START
    }
}

const fetchGamesSuccess = (data) => {
    return {
        type: actionTypes.FETCH_GAMES_SUCCESS,
        games: data
    }
}

const fethcGamesFail = (err) => {
    return {
        type: actionTypes.FETCH_GAMES_FAIL,
        err: err
    }
}

export const fetchGames = () => {
    return dispatch => {
        dispatch(fetchGamesStart());

        firebase.firestore().collection("games").onSnapshot((querySnapshot) => {
            let games= [];
            querySnapshot.forEach((doc)=> {
                games = [
                    ...games,
                    {
                        id: doc.id,
                        ...doc.data()
                    }
                ]
            })
            dispatch(fetchGamesSuccess(games))
        }, (err) => dispatch(fethcGamesFail(err)));
    }
}

const fetchThumbnailsSuccess = (id, url) => {
    return {
        type: actionTypes.FETCH_THUMBNAILS_SUCCESS,
        id: id,
        url: url
    }
}

export const fetchThumbnails = (id, thumbnail) => {
    return dispatch => {
        let imgRef = firebase.storage().ref(`thumbnails/${thumbnail}`);
        imgRef.getDownloadURL().then((url) => { 
            dispatch(fetchThumbnailsSuccess(id, url))
        });
    }
}

export const filterGames = (text) => {
    return {
        type: actionTypes.FILTER_GAMES,
        searchValue: text
    }
}

export const orderGames = (orderOption) => {
    return {
        type: actionTypes.ORDER_GAMES,
        orderOption: orderOption
    }
}