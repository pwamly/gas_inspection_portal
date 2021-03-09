"use strict";

// const { isInt } = require("../utils");

module.exports = (req, res, next) => {
    const {
        page = 1,
            pageSize = 25,
            sortBy = "createdAt",
            sortOrder = "desc",
    } = req.query;
    let pageInfo = { page, pageSize, sortBy, sortOrder };

    const mispelled = req.sortOrder && !req.sortOrder.matches(/^(?:asc|desc)$/i);

    // Check if client has mispelled the the sort order. (Should be asc or desc)
    if (mispelled) {
        return res.status(400).json({
            error: "Invalid sort order.",
            args: {
                sortOrder: req.sortOrder,
            },
        });
    }
    // console.log(req.query);
    pageInfo.pageSize = req.query.limit || pageInfo.pageSize;
    pageInfo.page = req.query.page || pageInfo.page;

    //.. if the page if from ui will be true otherwise false
    pageInfo.pageStatus = req.query.page ? true : false;
    // Compute offset and limit
    pageInfo = {...pageInfo };
    pageInfo.offset =
        (parseInt(pageInfo.page, 10) - 1) * parseInt(pageInfo.pageSize);
    pageInfo.limit = pageInfo.offset + parseInt(pageInfo.pageSize);

    req.query.pageInfo = pageInfo;

    next();
};