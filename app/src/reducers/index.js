import { FETCH_CARD, UPDATE_CARD, ERROR_CARD } from '../actions';

const initialState = {
    data: [],
    isFetching: false,
    error: ""
}

export const magicReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CARD:
            return {
                ...state,
                isFetching: true,
                data: []
            }
        case UPDATE_CARD:
            return {
                ...state,
                isFetching: false,
                data: action.payload
            }
        case ERROR_CARD:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
}