"use strict";

import axios from "axios";
import { store } from "../store";
import { fetchAccessToken } from "../client";

let instance;
let BASE_URL;
let isAlreadyFetchingAccessToken = false;
let subscribers = [];

const state = store.getState();
let { token } = state;

BASE_URL = process.env.REACT_APP_NECBOT_API_URL;

const defaultOptions = {
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
};

if (!instance) {
    const options = { baseURL: BASE_URL };
    instance = axios.create(defaultOptions);
    // instance.defaults.headers.common["Authorization"] =
    //     "AUTH TOKEN FROM INSTANCE";

    // //interceptor response

    // Set the AUTH token for any request
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
            return response;
        },
        function(error) {
            const {
                config,
                response: { status },
            } = error;
            const originalRequest = config;

            if (originalRequest.url == "/auth/login") {} else {
                if (status === 401) {
                    if (!isAlreadyFetchingAccessToken) {
                        isAlreadyFetchingAccessToken = true;
                        store.dispatch(fetchAccessToken()).then((access_token) => {
                            isAlreadyFetchingAccessToken = false;
                            onAccessTokenFetched(access_token);
                        });
                    }

                    const retryOriginalRequest = new Promise((resolve) => {
                        addSubscriber((access_token) => {
                            originalRequest.headers.Authorization = "Bearer " + access_token;
                            resolve(instance(originalRequest));
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