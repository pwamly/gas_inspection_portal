"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(() => {
            return Promise.all([
                queryInterface.addColumn("nb_user", "createdAt", {
                    type: Sequelize.DATE,
                    allowNull: false,
                }),
                queryInterface.addColumn("nb_user", "updatedAt", {
                    type: Sequelize.DATE,
                    allowNull: false,
                }),
            ]);
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(() => {
            return Promise.all([
                queryInterface.removeColumn("nb_user", "createdAt"),
                queryInterface.removeColumn("nb_user", "updatedAt"),
            ]);
        });
    },
};