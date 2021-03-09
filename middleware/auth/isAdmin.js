"use strict";

module.exports = (req, res, next) => {
    const { userRole } = req.payload;
    if (userRole == "admin") {
        next();
        return;
    }
    return res.status(401).json({ data: { message: "Not Authorized!" } });
};