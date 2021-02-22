import { stringify } from "query-string";
import { store } from "../store";
import instance from "../config/axiosConfig";
import { SAVE_TOKEN } from "../actions";
import { merge, forEach } from "lodash";
let access_token;
let userId;

//..................start..................
// ............. auth functions........

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

//..................end..................
// ............. auth functions..........

/**
 * @function getProfile
 * @argument {id}
 * @returns data
 */

const getProfile = async() => {
    await instance.get();
};

export const client = { getProfile };

const API_RESOURCES = [{
        name: "address-book",
    },
    {
        name: "admin",
    },
    {
        name: "plan",
    },
    {
        name: "credit",
    },
    { name: "contact" },
    {
        name: "crm",
    },
    {
        name: "credit-scheme",
    },
    {
        name: "sender-name",
    },
    { name: "sms-template" },
    { name: "purchase" },
    { name: "payment" },
    {
        name: "vendor",
    },
];

forEach(API_RESOURCES, (resource) => {
    console.log("ggggggg", resource);
    // merge(dar, resource);
});