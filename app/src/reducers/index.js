import { CATCH_POKE, UPDATE_POKE, ERROR_POKE } from '../actions';

const initialState = {
    data: [],
    isFetching: false,
    error: ""
}

export const pokeReducer = (state = initialState, action) => {
    switch(action.type) {
        case CATCH_POKE:
            return {
                ...state,
                isFetching: true,
                data: []
            }
        case UPDATE_POKE:
            return {
                ...state,
                isFetching: false,
                data: action.payload
            }
        case ERROR_POKE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
}