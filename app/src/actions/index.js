import axios from 'axios';

export const CATCH_POKE = "CATCH_POKE";
export const UPDATE_POKE = "UPDATE_POKE";
export const ERROR_POKE = "ERROR_POKE";


export const getPoke = ()  => {
    return  dispatch => {
        dispatch({ type: CATCH_POKE });
        axios
            .get("https://api.pokemontcg.io/v1/cards")
            // .get("http://gateway.marvel.com/v1/public/characters?apikey=06b071bd1512b47f17c9eae3b2cbaf10")
            .then(response => {
                dispatch({ type: UPDATE_POKE, payload: response.data.cards})
            })

            .catch(err => {
                console.error("ERROR ", err)
                dispatch({ type: ERROR_POKE, payload: "Error fetching data from api"})

            })
    }
}
