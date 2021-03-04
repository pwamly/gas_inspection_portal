"use strict";

import axios from "axios";
import { store } from "../store";
import { fetchAccessToken } from "../client";

let instance;
let BASE_URL;
let isAlreadyFetchingAccessToken = false;
let subscribers = [];

const token = localStorage.getItem("token");

BASE_URL = process.env.REACT_APP_NECBOT_API_URL;

const defaultOptions = {
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
};

if (!instance) {
    instance = axios.create(defaultOptions);
    instance.interceptors.request.use(function(config) {
        if (token) {
            config.headers.Authorization = token ? `Bearer ${token}` : "";
        }
        return config;
    });

    function onAccessTokenFetched(access_token) {
        subscribers = subscribers.filter((callback) => callback(access_token));
    }

    function addSubscriber(callback) {
        subscribers.push(callback);
    }

    instance.interceptors.response.use(
        function(response) {
            return response.data;
        },
        function(error) {
            console.log("uuuuuuuuuuuuu", JSON.stringify(error));
            const {
                config,
                response: { status },
            } = error;
            let originalRequest = config;

            if (originalRequest.url == "/auth/login") {} else {
                if (status === 403) {
                    if (!isAlreadyFetchingAccessToken) {
                        isAlreadyFetchingAccessToken = true;

                        fetchAccessToken().then((access_token) => {
                            const { AccessToken } = access_token.data;
                            isAlreadyFetchingAccessToken = false;
                            onAccessTokenFetched(AccessToken);
                        });
                    }

                    const retryOriginalRequest = new Promise((resolve) => {
                        addSubscriber((AccessToken) => {
                            const newtoken = "Bearer " + AccessToken;
                            const newheaders = {
                                ...originalRequest.headers,
                                Authorization: newtoken,
                            };
                            const newrequest = {...originalRequest, headers: newheaders };
                            const newinstance = axios.create();
                            resolve(newinstance(newrequest));
                        });
                    });

                    return retryOriginalRequest;
                }
            }

            return Promise.reject(error);
        }
    );
}
export default instance;