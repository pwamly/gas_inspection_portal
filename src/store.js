"use strict";
import { createStore } from "redux";
import reducer from "./reducer";

let store;
const initstore = {
    data: [],
    formdata: {},
    adduser: false,
    edituser: false,
    profile: {},
    viewuser: false,
    viewusr: false,
    adduserbtn: true,
    token: "",
};
if (!store) {
    store = createStore(reducer, initstore);
}

export { store };