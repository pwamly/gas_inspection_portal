/**
 * Get string value from environment variables
 *
 * @param {string} variable - variable name
 * @param {string} [defaultValue] - default value if variable name does not exist
 * @returns {string} returns value under the variable.
 */
exports.getString = (variable, defaultVal = null) =>
    process.env[variable] || defaultVal;

/**
 * Get interger value from environment variables
 *
 * @param {string} variable - name of the variable
 * @param {string} [defaultValue] - default value if variable does not exist
 * @param {number} returned value if variable is found and is integer. Otherwise
 *        the function will return `NaN`
 */
exports.getInt = (variable, defaultVal = NaN) =>
    1 * process.env[variable] || defaultVal;

/**
 * Get float value from environment variables
 *
 * @param {string} variable - name of the variable
 * @param {string} [defaultValue] - default value if variable does not exist
 * @param {number} returned value if variable is found and a float. Otherwise
 *        the function will return `NaN`
 */
exports.getFloat = (variable, defaultVal = NaN) =>
    parseFloat(process.env[variable]) || defaultVal;

/**
 * Returns true if we're in dev mode
 *
 * @returns {boolean}
 */
exports.isDev = () => /development/i.test(exports.getString("NODE_ENV"));

/** Returns true if we're in test mode */
exports.isTest = () => /test/i.test(exports.getString("NODE_ENV"));