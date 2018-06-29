import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isFetching: false,
    games: [],
    thumbnails: {},
    err: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_GAMES_START:
            return {
                ...state,
                isFetching: true
            }
        case actionTypes.FETCH_GAMES_SUCCESS:
            return {
                ...state,
                games: action.games,
                isFetching: false
            }
        case actionTypes.FETCH_GAMES_FAIL:
            return {
                ...state,
                isFetching: false,
                err: action.err
            }
        case actionTypes.FETCH_THUMBNAILS_SUCCESS:
            return {
                ...state,
                thumbnails: {
                    ...state.thumbnails,
                    [action.id]: action.url
                }
            }
        default: return state
    }
}

export default reducer;