var cache = require("js-cache");

cache.set(
    "userData", [{
        fname: "peter",
        lname: "boko",
        email: "peter@gmail.com",
        status: "active",
        role: "admin",
        password: "1234",
    }, ],
    60000
);

export const isValidUser = () => {
    return localStorage.getItem("isLogged");
};

export const isAdmin = () => {
    return false;
};

export const authenticate = () => {
    return false;
};

async function isEmailExist(email) {
    const data = (await cache.get("userData")) || [];
    const dat = await data.reduce((arr, i, en) => {
        if (i.email == email) {
            arr.push(i);
        }
    }, []);
    return dat;
}

//register user

export const registerUser = (newuser) => {
    const { email } = newuser;
    if (isEmailExist(email).length === 0) {
        try {
            const data = cache.get("userData");
            data.push(newuser);
            cache.set("userData", [], 60000);
            return { Successful: true, message: "success" };
        } catch (error) {
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