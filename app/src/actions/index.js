import axios from 'axios';

export const FETCH_CARD = "FETCH_CARD";
export const UPDATE_CARD = "UPDATE_CARD";
export const ERROR_CARD = "ERROR_CARD";


export const getMagic = ()  => {
    return  dispatch => {
        dispatch({ type: FETCH_CARD });
        axios
            .get('https://api.magicthegathering.io/v1/cards')
            .then(response => {
                dispatch({ type: UPDATE_CARD, payload: response.data.cards})
            })

            .catch(err => {
                console.error("ERROR ", err)
                dispatch({ type: ERROR_CARD, payload: "Error fetching data from the API"})
            })
    }
}