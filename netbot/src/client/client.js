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
            password: "1234",
        }, ],
        60000
    );
}

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
    const data = cache.get("userData") || [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].email === email) {
            return data[i];
        }
    }
}

//register user

export const registerUser = (newuser) => {
    const { email } = newuser;
    const isExist = isEmailExist(email);
    if (!isEmailExist(email)) {
        try {
            const data = cache.get("userData");
            newuser = {...newuser, id: uuidv4(), status: "Inactive", role: "user" };
            data.push(newuser);
            cache.set("userData", data, 60000);
            return { Successful: true, message: "success" };
        } catch (error) {
            console.log("user exist", newuser);
            return { Successful: false, message: "user exist" };
        }
    } else {}
};

// login

export const login = (value) => {
    const { email, password } = value;
    const data = cache.get("userData") || [];
    const dat = data.reduce((arr, i, en) => {
        if (i.email === email) {
            if (i.password == password) {
                arr.push({ Successful: true, message: "logged" });
                console.log("loged", password);
                localStorage.setItem("isLogged", true);
                window.location.replace(`/dashboard`);
            } else {
                arr.push({ Successful: false, message: "Wrong password" });
                console.log("wrong password");
            }
        } else {
            console.log("Not user", isEmailExist(email).length);
            arr.push({ Successful: false, message: "Don't have" });
        }
        return arr;
    }, []);

    return dat;
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