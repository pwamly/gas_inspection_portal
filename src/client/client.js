import { stringify } from "query-string";
import { store } from "../store";
import instance from "../config/axiosConfig";

let access_token;
let userId;

const state = store.getState();
const { token } = state;
export const fetchAccessToken = async() => {
    try {
        access_token = await instance.post("/refresh_token");

        return access_token;
    } catch (error) {
        console.log(error);
    }
};

export const isLogged = () => {
    if (state.isLogged !== true) {}
    return false;
};

export const login = async(payload) => {
    try {
        const authRes = await instance.post("/auth/login", {...payload });
        console.log("resp", authRes);
    } catch (error) {
        console.log("error in login", error);
    }

    return false;
};