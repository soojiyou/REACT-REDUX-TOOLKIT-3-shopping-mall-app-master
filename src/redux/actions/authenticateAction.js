import { authenticateActions } from "../reducers/authenticateReducer";

function login(id, password, authenticate) {
    return (dispatch, getState) => {
        // dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
        dispatch(authenticateActions.getLoginUserId({ id }));
        dispatch(authenticateActions.getLoginUserPassword({ password }));
        dispatch(authenticateActions.getAuthenticate({ authenticate }));


    }
}

function logout(authenticate) {
    return (dispatch, getState) => {
        dispatch(authenticateActions.removeAuthenticate({ authenticate }));
    }
}

export const authenticateAction = { login, logout };