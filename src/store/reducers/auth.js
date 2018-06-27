import * as actionTypes from '../actions/actionTypes';

const initailState = {
    user: null,
    loginErr: {},
    loginLoading: false,
    registerErr: {},
    registerLoading: false
}

const reducer = (state=initailState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                loginLoading: true
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                user: action.user,
                loginLoading: false
            }
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                loginErr: action.err,
                loginLoading: false
            }
        case actionTypes.REGISTER_START:
            return {
                ...state,
                registerLoading: true
            }
        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                user: action.user,
                registerLoading: false
            }
        case actionTypes.REGISTER_FAIL:
            return {
                ...state,
                registerErr: action.err,
                registerLoading: false
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                user: null
            }
    default: return state
    }
}

export default reducer;