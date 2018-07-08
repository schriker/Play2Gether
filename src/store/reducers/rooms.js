import * as actionType from '../actions/actionTypes';

const initailState = {
    rooms: {},
    err: null
}

const reducer = (state=initailState, action) => {
    switch (action.type) {
        case actionType.FETCH_ROOMS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                rooms: {
                    ...state.rooms,
                    ...action.rooms
                }
            }
        case actionType.FETCH_ROOMS_FAIL:
            return {
                ...state,
                isFetching: false,
                err: action.err
            }
        default: return state;
    }
}

export default reducer;