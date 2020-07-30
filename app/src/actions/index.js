import axios from "axios";


export const types = {
    FETCHING_OPTIONS: "FETCHING_OPTIONS",
    
    FETCHING_EYES: "FETCHING_EYES",
    FETCHING_NOSE: "FETCHING_NOSE",
    FETCHING_MOUTH: "FETCHING_NOSE",
    
    FETCHING_SUCCESS: "FETCHING_SUCCESS",
    FETCHING_ERROR: "FETCHING_ERROR",
    
   

}

export const fetchEyes = () => dispatch => {
    dispatch({type: types.FETCHING_OPTIONS });

axios

    .get("https://api.adorable.io/avatars/list" )
    .then (res => {
        console.log("rh: actions/index.js: fetchEyes: axios.then", res.data.face);
        dispatch({
            type: types.FETCHING_SUCCESS,
            payload: res.data.face
        });
    })
    .catch(err => {
        console.error("get all eyes data failed:", err.message);
        dispatch({ type: types.FETCHING_ERROR,
            payload: err.message
        });
    });
}