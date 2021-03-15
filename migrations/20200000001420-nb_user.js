"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(() => {
            return Promise.all([
                queryInterface.addColumn("nb_user", "signature", {
                    type: Sequelize.STRING(60),
                    allowNull: false,
                }),
            ]);
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(() => {
            return Promise.all([queryInterface.addColumn("nb_user", "signature")]);
        });
    },
};