"use strict";

import { Router } from "express";
import getUsers from "./user";
import paginator from "../../middleware/reports/paginator";
import isAdmin from "../../middleware/auth/isAdmin";
import { nb_user } from "../../models/";
const user = Router();

user.get("/", paginator, getUsers);

user.delete("/:id", isAdmin, async(req, res) => {
    const { id } = req.params;
    try {
        const response = await nb_user.destroy({ where: { id } });
        if (response == 1) {
            return res.json({
                successful: true,
                message: "User Deleted!",
            });
        }
        return res.status(403).json({
            successful: false,
            message: "Alredy deleted!",
        });
    } catch (error) {
        console.log(error);
        return res.status(403).json({
            successful: false,
            message: "Failed!",
        });
    }
});

module.exports = user;