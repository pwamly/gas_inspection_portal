"use strict";
import db from "../models";
const { nb_user } = db;

module.exports = async(req, res) => {
    try {
        const { id } = req.body;
        let { token_version } = await nb_user.findOne({ where: { id: id } });
        const user = await nb_user.update({ token_version: token_version + 1 }, { where: { id: id } });
        if (user) {
            return res.status(401).json({ successful: true });
        }
        return res.status(401).json({ successful: false });
    } catch (error) {
        console.log(error);
    }
};