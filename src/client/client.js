import { stringify } from "query-string";
import { v4 as uuidv4 } from "uuid";
var cache = require("js-cache");

const admindata = cache.get("userData");

if (!admindata) {
    cache.set(
        "userData", [{
            id: uuidv4(),
            fname: "Peter",
            lname: "Boko",
            email: "peter@gmail.com",
            status: "Active",
            role: "admin",
            phone: "255673089337",
            password: "1234",
        }, ],
        6000000
    );
}

const data = cache.get("userData") || [];

export const isValidUser = () => {
    return localStorage.getItem("isLogged");
};

export const isAdmin = () => {
    return false;
};

export const authenticate = () => {
    return false;
};

function isEmailExist(email) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].email === email) {
            return data[i];
        }
    }
}

//register user

export const registerUser = (newuser) => {
    const data = cache.get("userData");
    const { email } = newuser;
    if (!isEmailExist(email)) {
        try {
            newuser = {...newuser, id: uuidv4(), status: "Inactive", role: "user" };
            data.push(newuser);
            cache.set("userData", data, 6000000);
            return { Successful: true, message: "success" };
        } catch (error) {
            console.log("user exist", newuser);
            return { Successful: false, message: "user exist" };
        }
    } else {}
};

// remove user

export const removeUser = ({ id }) => {
    const data = cache.get("userData");
    console.log("data before", data);
    console.log("the id", id);
    const newdata = data.filter((user) => user.id !== id);
    cache.set("userData", newdata, 6000000);
    console.log("data after", data);
    console.log("the sent result", newdata);
    return newdata;
};

// login

export const login = (value) => {
    const { email, password } = value;
    const data = cache.get("userData") || [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].email === email && data[i].password === password) {
            localStorage.setItem("isLogged", true);
            const { fname, lname, email, status, role, phone, id } = data[i];
            const prof = { id, fname, lname, email, status, role, phone };
            localStorage.setItem("profile", JSON.stringify(prof));
            window.location.replace(`/dashboard`);
            return true;
        }
    }
};

// get profile

export const getProfile = () => {
    const prof = localStorage.getItem("profile");
    return JSON.parse(prof);
};

// fetch user data
export const userData = () => {
    console.log(cache.get("userData"));
    const data = cache.get("userData");
    return data;
};

// logout
export const logout = () => {
    console.log("loged out");
    localStorage.clear();
    window.location.replace(`/login`);
    return;
};