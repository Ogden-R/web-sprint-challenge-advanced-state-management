import { START_API_CALL, END_API_CALL_SUCCESS, ADD_SMURF, SET_ERROR_TEXT}  from './../actions';

export const initialState = {
    smurfs:[
        {
            id: "",
            name: "",
            nickname: "",
            position: "",
            description:""
        }
    ],
    isLoading: false,
    errorText: ""
}

const reducer = (state= initialState, action)=>{
    switch(action.type) {
        case(START_API_CALL):
            return({
                ...state,
                isLoading: true
            });
        case(END_API_CALL_SUCCESS):
            return({
                ...state,
                smurfs: action.payload,
                isLoading: false
            });
        case(SET_ERROR_TEXT):
            return({
                ...state,
                isLoading: false,
                errorText: action.payload
            });
        case(ADD_SMURF):
            return({
                ...state,
                smurfs:[...state.smurfs, action.payload]
            });
        
        default:
            return(state);
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.