"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.addColumn("nb_user", "phone", {
                    type: Sequelize.STRING,
                    allowNull: false,
                    unique: true,
                }),
            ]);
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([queryInterface.addColumn("nb_user", "phone")]);
        });
    },
};