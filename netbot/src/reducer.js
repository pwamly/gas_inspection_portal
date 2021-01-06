import {
    ACTIVATE_USER,
    ADD_USER,
    DEACTIVATE_USER,
    REMOVE_USER,
    EDIT_USER,
} from "./actions";

function reducer(state, action) {
    if (action.type === ADD_USER) {
        console.log("ooooooooooooooo", state);
    }

    return state;
}

export default reducer;