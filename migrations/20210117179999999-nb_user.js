"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.addColumn("nb_user", "accessToken", {
                    type: Sequelize.TEXT,
                    allowNull: true,
                    unique: true,
                }),
            ]);
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.removeColumn("nb_user", "accessToken"),
            ]);
        });
    },
};