import * as actionType from '../actions/actionTypes';

const initialState = {
    messages: [],
    loading: true,
    err: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.FETCH_MESSAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                messages: [
                    ...action.data.messages
                ]
            }
        case actionType.FETCH_MESSAGES_FAIL:
            return {
                ...state,
                loading: false,
                err: action.err
            }
        default: return state
    }
}

export default reducer;

