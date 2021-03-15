"use strict";

import { Router } from "express";
import { nb_user } from "../../models";

const profile = Router();

profile.get("/:id", async(req, res) => {
    const { id } = req.params;

    const data = await nb_user.findOne({ where: { id } });
    const {
        first_name: fname,
        last_name: lname,
        username,
        email,
        signature,
        userRole,
    } = data;

    res.json({ fname, lname, username, email, signature, userRole });
});

module.exports = profile;