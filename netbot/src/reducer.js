import {
    ACTIVATE_USER,
    ADD_USER,
    DEACTIVATE_USER,
    REMOVE_USER,
    EDIT_USER,
    EXIT_ADD_FORM,
    ADD_USER_FORM,
} from "./actions";
import { registerUser } from "./client/";

function reducer(state, action) {
    /*forms*/
    if (action.type === EXIT_ADD_FORM) {
        return {...state, adduser: false };
    }
    if (action.type === ADD_USER_FORM) {
        return {...state, adduser: true };
    }

    /*user data*/
    if (action.type === ADD_USER) {
        if (action.payload) {
            console.log("iiiiiiiiii", action.payload);
            registerUser(action.payload);
        }

        return {...state, adduser: false };
    }

    return state;
}

export default reducer;