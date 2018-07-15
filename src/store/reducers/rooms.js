import * as actionType from '../actions/actionTypes';

const initailState = {
    rooms: {},
    err: null,
    searchValue: "",
    orderOption: {
        value: "Players",
        option: "ASC"
    },
    isAddingRoom: false,
    roomAdded: false,
    addedRoomId: null
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
         case actionType.FILTER_ROOMS:
            return {
                ...state,
                searchValue: action.searchValue
            }
        case actionType.ORDER_ROOMS: 
            return {
                ...state,
                orderOption: action.orderOption
            }
        case actionType.ADD_ROOM_START:
            return {
                ...state,
                isAddingRoom: true
            }
        case actionType.ADD_ROOM_FAIL:
            return {
                ...state,
                err: action.err,
                isAddingRoom: false
            }
        case actionType.ADD_ROOM_SUCCESS:
            return {
                ...state,
                roomAdded: true,
                addedRoomId: action.roomId,
                isAddingRoom: false
            }
        case actionType.RESET_ROOM_DATA: 
            return {
                ...state,
                isAddingRoom: false,
                roomAdded: false,
                addedRoomId: null
            }
        default: return state;
    }
}

export default reducer;