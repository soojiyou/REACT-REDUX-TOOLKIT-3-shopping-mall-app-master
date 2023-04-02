import { authenticateActions } from "../reducers/authenticateReducer";

function login(id, password) {
    return (dispatch, getState) => {
        // dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
        dispatch(authenticateActions.getAuthenticate({ authenticate: true }));
        dispatch(authenticateActions.getLoginUserId({ id }));
        dispatch(authenticateActions.getLoginUserPassword({ password }));
    }
}

function logout(authenticate) {
    return (dispatch, getState) => {
        dispatch(authenticateActions.removeAuthenticate({ authenticate: false }));
    }
}

export const authenticateAction = { login, logout };