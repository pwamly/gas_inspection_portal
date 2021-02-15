import { stringify } from "query-string";
import { store } from "../store";
import instance from "../config/axiosConfig";
import { SAVE_TOKEN } from "../actions";

let access_token;
let userId;

export const fetchAccessToken = async() => {
    try {
        access_token = await instance.post("/refresh_token");

        return access_token;
    } catch (error) {
        console.log(error);
    }
};

export const isLogged = () => {
    const logged = localStorage.getItem("islogged");
    const token = localStorage.getItem("token");

    if (!logged) {
        console.log("not loged", logged);
        return false;
    }
    if (!token) {
        console.log("no token");
        return false;
    }
    return logged;
};

export const login = async(payload) => {
    try {
        const authRes = await instance.post("/auth/login", {...payload });
        const { accessToken } = authRes.data;
        if (authRes.status == "200") {
            localStorage.setItem("token", accessToken);
            localStorage.setItem("islogged", true);
            window.location.replace(`/dashboard`);
        }
    } catch (error) {
        console.log("error in login", error);
    }

    return false;
};