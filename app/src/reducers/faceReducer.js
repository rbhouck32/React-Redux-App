import { types } from "../actions/index"
    


// const colors = [{label: "Red", value: "fc0303"}, { label: "Blue", value: "4744eb"}]



const initialState  = {
    // face: [],
    eyeOptions: [],
    noseOptions: [],
    mouthOptions: [],
    colorOptions: "A1A1A1",
    isFetching: false,
    selected: false,
    selectedFaceOptions: {},
    error: "", 
    


    }




    export const eyesReducer = (state = initialState, action) => {
        switch(action.type) {
            case types.FETCHING_OPTIONS:
                return {
                    ...state,
                    isFetching: true
                };
            case types.FETCHING_SUCCESS:
                return {
                    ...state,
                    isFetching: false,
                    eyeOptions: action.payload.eyes,
                    noseOptions: action.payload.nose,
                    mouthOptions: action.payload.mouth,
                    
                     error: ""
                    
                };
            case types.FETCHING_ERROR:
                return {
                    ...state,
                    isFetching: false,
                    error: action.payload
                };
            default: 
                return state;
        }

    };
