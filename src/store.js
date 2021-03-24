"use strict";
import { createStore } from "redux";
import reducer from "./reducer";

let store;
const initstore = {
    data: [],
    adduser: false,
    edituser: false,
    profile: {},
    viewuser: false,
    showProfile: false,
    adduserbtn: true,
    token: "",
    reportdata: {},
    teamdata: {},
    historytable: false,
};
if (!store) {
    store = createStore(reducer, initstore);
}

export { store };