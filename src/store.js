"use strict";
import { createStore } from "redux";
import reducer from "./reducer";
import { ear } from "./client";

let store;
const initstore = {
    data: [],
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
console.log("uuuuuuuuuu" + ear);
export { store };