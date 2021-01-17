"use strict";

module.exports = (req, res, next) => {
    console.log("is admin");
    next();
    return {};
};