import * as actionType from '../actions/actionTypes';

const initialState = {
    messages: null,
    loading: true,
    sending: false,
    err: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.FETCH_MESSAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                messages: [
                    ...action.data
                ]
            }
        case actionType.FETCH_MESSAGES_FAIL:
            return {
                ...state,
                loading: false,
                err: action.err
            }
        case actionType.SEND_MESSAGE_START:
            return {
                ...state,
                sending: true
            }
        case actionType.SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                sending: false
            }
        case actionType.SEND_MESSAGE_FAIL:
            return {
                ...state,
                sending: false,
                err: action.err
            }
        case actionType.CLEAR_CHAT:
            return {
                ...state,
                messages: null
            }
        default: return state
    }
}

export default reducer;

