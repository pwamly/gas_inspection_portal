const { getString } = require("../utils/env");

module.exports = {
    development: {
        username: getString("DEV_DB_USERNAME"),
        password: getString("DEV_DB_PASSWORD"),
        database: getString("DEV_DB_NAME"),
        host: getString("DEV_DB_HOST"),
        dialect: getString("DEV_DB_DIALECT"),
        logging: false,
    },
    test: {
        username: getString("CI_DB_USERNAME"),
        password: getString("CI_DB_PASSWORD"),
        database: getString("CI_DB_NAME"),
        host: getString("CI_DB_HOST"),
        dialect: getString("CI_DB_DIALECT"),
        logging: false,
    },
    production: {
        username: getString("DB_USERNAME"),
        password: getString("DB_PASSWORD"),
        database: getString("DB_NAME"),
        host: getString("DB_HOST"),
        dialect: getString("DB_DIALECT"),
        logging: false,
    },
};