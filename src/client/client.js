import { stringify } from "query-string";
import { store } from "../store";
import instance from "../config/axiosConfig";
import { SAVE_TOKEN } from "../actions";
import { merge, forEach } from "lodash";
import isEmpty from "lodash/isEmpty";
import { singularize, pluralize } from "inflection";
import camelCase from "lodash/camelCase";
import jwtDecode from "jwt-decode";

let access_token;
let userId;
let tokenPayload;

const logged = localStorage.getItem("islogged");
const token = localStorage.getItem("token");

//..................start..................
// ............. auth functions........

/**
 * @function
 * @name getTokenPayload
 * @description Return decoded token payload
 * @param {string} token jwt token base64 url encoded token
 * @returns {object} Jwt token content
 * @version 0.1.0
 * @since 0.1.0
 */
export const getTokenPayload = (token) => {
    if (isEmpty(tokenPayload)) {
        try {
            tokenPayload = jwtDecode(token);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        }
    }

    return tokenPayload;
};

export const fetchAccessToken = async() => {
    try {
        access_token = await instance.post("/refresh_token");
        const { AccessToken } = access_token.data;
        localStorage.setItem("token", AccessToken);
        return access_token;
    } catch (error) {
        console.log(error);
    }
};

export const isLogged = () => {
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

export const logout = async() => {
    localStorage.clear();
    window.location.replace(`/`);
    try {
        const authRes = await instance.post("/auth/logout", {
            token: token,
        });
        const { accessToken } = authRes.data;
        if (authRes.status == "200") {}
    } catch (error) {
        console.log("error in login", error);
    }

    return false;
};
//..................end..................
// ............. auth functions..........

/**
 * @function prepareParams
 * @name prepareParams
 * @description convert api query params as per API filtering specifications
 * @param {object} params api call query params
 * @returns {object} http params to be sent to server
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 */
export const prepareParams = (params) => {
    const normalizedParams = {};
    const { sort, page, pageSize, ...otherParams } = params || {};

    if (sort) {
        forEach(params.sort, (value, key) => {
            normalizedParams.sortBy = key;
            normalizedParams.sortOrder = value;
        });
    }

    if (page) {
        normalizedParams.page = params.page;
    }

    if (pageSize) {
        normalizedParams.pageSize = params.pageSize;
    }

    if (otherParams) {
        forEach(otherParams, (value, key) => {
            normalizedParams[key] = value;
        });
    }

    return normalizedParams;
};

/**
 * @function get
 * @name get
 * @description issue http get request to specified url.
 * @param {string} url valid http path.
 * @param {object} [params] params that will be encoded into url query params.
 * @returns {Promise} promise resolve with data on success or error on failure.
 * @since 0.1.0
 * @version 0.1.0
 */
export const get = (url, params) => {
    const options = prepareParams(params);
    return instance.get(url, { params: options });
};

/**
 * @function post
 * @name post
 * @description issue http post request to specified url.
 * @param {string} url valid http path.
 * @param {object} data request payload to be encoded on http request body
 * @returns {Promise} promise resolve with data on success or error on failure.
 * @since 0.1.0
 * @version 0.1.0
 * @example
 * import { post } from './client';
 *
 * const postUser = post('/users', { age: 14 });
 * postUser.then(user => { ... }).catch(error => { ... });
 */
export const post = (url, data) => {
    if (isEmpty(data)) {
        return Promise.reject(new Error("Missing Payload"));
    }

    return instance.post(url, data);
};

/**
 * @function put
 * @name put
 * @description issue http put request to specified url.
 * @param {string} url valid http path.
 * @param {object} data request payload to be encoded on http request body
 * @returns {Promise} promise resolve with data on success or error on failure.
 * @since 0.1.0
 * @version 0.1.0
 * @example
 */
export const put = (url, data) => {
    if (isEmpty(data)) {
        return Promise.reject(new Error("Missing Payload"));
    }

    return instance.put(url, data);
};

/**
 * @function patch
 * @name patch
 * @description issue http patch request to specified url.
 * @param {string} url valid http path.
 * @param {object} data request payload to be encoded on http request body
 * @returns {Promise} promise resolve with data on success or error on failure.
 * @since 0.1.0
 * @version 0.1.0
 * @example
 */
export const patch = (url, data) => {
    if (isEmpty(data)) {
        return Promise.reject(new Error("Missing Payload"));
    }

    return instance.patch(url, data);
};

/**
 * @function del
 * @name del
 * @description issue http delete request to specified url.
 * @param {string} url valid http path.
 * @returns {Promise} promise resolve with data on success or error on failure.
 * @since 0.1.0
 * @version 0.1.0
 * @example
 */
export const del = (url) => {
    return instance.delete(url);
};

/**
 * @function
 * @name normalizeResource
 * @description Normalize resource by adding singular and plural
 * names to it
 * @param {string} resource valid api resource name
 * @returns {object} Object contains singular and plural names for resource
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export const normalizeResource = (resource) => {
    const singular = singularize(resource.name);
    const plural = pluralize(resource.name);

    return { singular, plural };
};

/**
 * @function
 * @name variableNameFor
 * @description Generate camel cased variable name based on provided strings
 * @param  {...string} names array of names to be used in variable name
 * @returns {string} camel cased name
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const variableNameFor = (...names) => camelCase([...names]);

/**
 * @function
 * @name createGetListHttpAction
 * @param {string} resource Api resource name
 * @returns {object} http actions to interact with a resource
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export const createGetListHttpAction = (resource) => {
    const { plural } = normalizeResource(resource);

    const methodName = variableNameFor("get", plural);

    return {
        [methodName]: (params) => {
            const endpoint = `/${plural}`;

            return get(endpoint, params);
        },
    };
};

/**
 * @function
 * @name createGetSingleHttpAction
 * @param {string} resource Api resource name
 * @returns {object} http actions to interact with a resource
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export const createGetSingleHttpAction = (resource) => {
    const { singular, plural } = normalizeResource(resource);

    const methodName = variableNameFor("get", singular);

    return {
        [methodName]: (id) => {
            const endpoint = `/api/${singular}/${id}`;

            return get(endpoint);
        },
    };
};

/**
 * @function
 * @name createPostHttpAction
 * @param {string} resource Api resource name
 * @returns {object} http actions to interact with a resource
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export const createPostHttpAction = (resource) => {
    const { singular, plural } = normalizeResource(resource);

    const methodName = variableNameFor("post", singular);

    return {
        [methodName]: (payload) => {
            const endpoint = `/${plural}`;

            return post(endpoint, payload);
        },
    };
};

/**
 * @function
 * @name createPutHttpAction
 * @param {string} resource Api resource name
 * @returns {object} http actions to interact with a resource
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export const createPutHttpAction = (resource) => {
    const { singular, plural } = normalizeResource(resource);

    const methodName = variableNameFor("put", singular);

    return {
        [methodName]: (payload) => {
            const endpoint = `/${plural}/${payload.id}`;

            return put(endpoint, payload);
        },
    };
};

/**
 * @function
 * @name createPatchHttpAction
 * @param {string} resource Api resource name
 * @returns {object} http actions to interact with a resource
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export const createPatchHttpAction = (resource) => {
    const { singular, plural } = normalizeResource(resource);

    const methodName = variableNameFor("patch", singular);

    return {
        [methodName]: (payload) => {
            const endpoint = `/${plural}/${payload.id}`;

            return patch(endpoint, payload);
        },
    };
};

/**
 * @function
 * @name createDeleteHttpAction
 * @param {string} resource Api resource name
 * @returns {object} http actions to interact with a resource
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export const createDeleteHttpAction = (resource) => {
    const { singular, plural } = normalizeResource(resource);

    const methodName = variableNameFor("delete", singular);

    return {
        [methodName]: (id) => {
            const endpoint = `/${plural}/${id}`;

            return del(endpoint);
        },
    };
};

/**
 * @function createHttpActionsFor
 * @name createHttpActionsFor
 * @description generate http actions to interact with resource
 * @param {string} resource valid http resource
 * @returns {object} http actions to interact with a resource
 * @since 0.1.0
 * @version 0.1.0
 * @example
 * import { createHttpActionsFor } from './client';
 *
 * const { deleteUser } = createHttpActionsFor('user');
 * deleteUser('5c176624').then(user => { ... }).catch(error => { ... });
 */
export const createHttpActionsFor = (resource) => {
    const getResources = createGetListHttpAction(resource);
    const getResource = createGetSingleHttpAction(resource);
    const postResource = createPostHttpAction(resource);
    const putResource = createPutHttpAction(resource);
    const patchResource = createPatchHttpAction(resource);
    const deleteResource = createDeleteHttpAction(resource);

    return {
        ...getResources,
        ...getResource,
        ...postResource,
        ...putResource,
        ...patchResource,
        ...deleteResource,
    };
};

/**
 * @function
 * @name getUserId
 * @description retrieve userId from local storage if not set
 *
 * @returns {string |undefined} user id
 * @since 0.1.0
 * @version 0.1.0
 */
export const getUserId = () => {
    if (isEmpty(userId)) {
        const payload = getTokenPayload(token);
        const { id } = payload;

        // userId = localStorage.getItem("userId"); // eslint-disable-line
        userId = id;
    }

    return userId;
};