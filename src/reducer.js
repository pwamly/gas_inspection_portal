import {
    ACTIVATE_USER,
    ADD_USER,
    DEACTIVATE_USER,
    REMOVE_USER,
    EDIT_USER,
    EXIT_ADD_FORM,
    EXIT_EDIT_USER,
    ADD_USER_FORM,
    VIEW_USER,
    EXIT_VEW_USER,
    SAVE_UPDATES,
    SAVE_TOKEN,
    SAVE_INITIAL_DATA,
    SAVE_FORM_DATA,
} from "./actions";
// import { removeUser, registerUser } from "./client/";
let removeUser, registerUser;

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
            registerUser(action.payload);
        }
        return {...state, adduser: false };
    }

    if (action.type === REMOVE_USER) {
        // return {...state, data: removeUser(action.payload), viewuser: false };
    }

    if (action.type === VIEW_USER) {
        if (action.payload) {
            const { modalShown } = action.payload;
            return {
                ...state,
                showProfile: modalShown,
            };
        }
        return {...state };
    }
    if (action.type === SAVE_INITIAL_DATA) {
        if (action.payload) {
            return {
                ...state,
                profile: {...action.payload },
            };
        }
        return {...state };
    }

    if (action.type === EXIT_VEW_USER) {
        return {
            ...state,
            viewuser: false,
            viewdata: null,
            adduserbtn: true,
        };
    }
    if (action.type === EDIT_USER) {
        return {...state, edituser: true, viewuser: false };
    }
    if (action.type === EXIT_EDIT_USER) {
        return {...state, edituser: false, viewdata: null, adduserbtn: true };
    }
    if (action.type === SAVE_UPDATES) {
        let { data } = state;
        const { payload } = action;

        for (let i = 0; i < data.length; i++) {
            if (data[i].id === payload.id) {
                data[i] = payload;
                if (payload.role === "admin") {
                    state.profile = payload;
                }
            }
        }

        return {
            ...state,
            edituser: false,
            data,
            viewdata: null,
            adduserbtn: true,
        };
    }

    //................. AUTH

    if (action.type === SAVE_TOKEN) {
        if (action.payload) {
            const { access_token } = action.payload;
            console.log("token from login", access_token);
            return {...state, token: access_token };
        }
    }

    //......... form data

    if (action.type === SAVE_FORM_DATA) {
        if (action.payload) {
            const { email } = action.payload;
            console.log("token from login", email);
            return {...state, formdata: { email } };
        }
    }
    return state;
}

export default reducer;