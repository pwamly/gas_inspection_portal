"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(() => {
            return Promise.all([
                queryInterface.changeColumn("vehiclehistory", "id", {
                    type: Sequelize.STRING(60),
                    allowNull: false,
                    unique: false,
                    primaryKey: false,
                }),
                queryInterface.changeColumn("vehiclehistory", "email", {
                    type: Sequelize.STRING(60),
                    allowNull: false,
                }),
            ]);
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(() => {
            return Promise.all([
                queryInterface.changeColumn("vehiclehistory", "id"),
                queryInterface.changeColumn("vehiclehistory", "email"),
            ]);
        });
    },
};