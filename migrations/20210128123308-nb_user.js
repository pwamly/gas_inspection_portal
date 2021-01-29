"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.addColumn("nb_user", "tokenVersion", {
                    type: Sequelize.INTEGER(255),
                    defaultValue: 0,
                }),
            ]);
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.removeColumn("nb_user", "tokenVersion"),
            ]);
        });
    },
};