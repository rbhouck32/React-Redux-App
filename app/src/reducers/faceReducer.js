import { types } from "../actions/index"
    






const initialState  = {
    // face: [],
    eyeOptions: [],
    noseOptions: [],
    mouthOptions: [],
    isFetching: false,
    selected: false,
    selectedFaceOptions: {},
    error: "", 


    }




    export const eyesReducer = (state = initialState, action) => {
        switch(action.type) {
            case types.FETCHING_EYES:
                return {
                    ...state,
                    isFetching: true
                };
            case types.FETCHING_EYES_SUCCESS:
                return {
                    ...state,
                    isFetching: false,
                    eyeOptions: action.payload,
                    error: ""
                };
            case types.FETCHING_EYES_ERROR:
                return {
                    ...state,
                    isFetching: false,
                    error: action.payload
                };
            default: 
                return state;
        }

    };
