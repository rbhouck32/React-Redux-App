import axios from "axios";


export const types = {
    FETCHING_EYES: "FETCHING_EYES",
    FETCHING_EYES_SUCCESS: "FETCHING_EYES_SUCCESS",
    FETCHING_EYES_ERROR: "FETCHING_EYES_ERROR",
    FETCHING_NOSE: "FETCHING_NOSE",
    FETCHING_NOSE_SUCCESS: "FETCHING_NOSE_SUCCESS",
    FETCHING_NOSE_ERROR: "FETCHING_NOSE_ERROR",
    FETCHING_MOUTH: "FETCHING_NOSE",
    FETCHING_MOUTH_SUCCESS: "FETCHING_NOSE_SUCCESS",
    FETCHING_MOUTH_ERROR: "FETCHING_NOSE_ERROR",

}

export const fetchEyes = () => dispatch => {
    dispatch({type: types.FETCHING_EYES });

axios
    .get("https://api.adorable.io/avatars/list")
}