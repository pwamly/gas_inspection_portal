"use strict";
import { createStore } from "redux";
import reducer from "./reducer";
let store;
const initstore = {
    userData: ["data"],
    adduser: false,
    edituser: false,
    profile: "profile",
    viewuser: false,
    viewusr: false,
    adduserbtn: true,
    token: "",
};
if (!store) {
    store = createStore(reducer, initstore);
    console.log("uuuuuuuuuu", store);
}

export { store };