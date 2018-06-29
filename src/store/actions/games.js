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

        firebase.firestore().collection("games").get()
        .then((querySnapshot) => {
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
        })
        .catch((err) => dispatch(fethcGamesFail(err)))   
    }
}