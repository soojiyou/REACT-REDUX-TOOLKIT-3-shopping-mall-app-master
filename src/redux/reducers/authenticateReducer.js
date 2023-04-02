import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    id: '',
    password: '',
    authenticate: false,

}

// function authenticateReducer(state = initialState, action) {
//     let { type, payload } = action;
//     switch (type) {
//         case "LOGIN_SUCCESS":
//             return { ...state, id: payload.id, password: payload.password, authenticate: true };

//         default:
//             return { ...state };

//     }
// }

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getLoginUserId(state, action) {
            state.id = action.payload.id;
        },
        getLoginUserPassword(state, action) {
            state.password = action.payload.password;
        },
        getAuthenticate(state, action) {
            state.authenticate = action.payload.authenticate;
        },
        removeAuthenticate(state, action) {
            state.authenticate = action.payload.authenticate;
        },
    }

});

export const authenticateActions = authSlice.actions;
export default authSlice.reducer;