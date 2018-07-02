import * as actionTypes from '../actions/actionTypes';

const initialState = {
    userData: {},
    err: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_USER_DATA_SUCCESS:
            return {
                ...state,
                userData: action.data
            }
        case actionTypes.FETCH_USER_DATA_FAIL:
            return {
                ...state,
                err: action.err
            }
        case actionTypes.FAV_GAME_SUCCESS: 
            return {
                ...state,
                userData: {
                    ...state.userData,
                    favGames: [
                        ...action.favGames
                    ]
                }
            }
        default: return state
    }
}

export default reducer;