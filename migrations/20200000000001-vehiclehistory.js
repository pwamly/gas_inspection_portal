"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(() => {
            return Promise.all([
                queryInterface.changeColumn("vehiclehistory", "id", {
                    type: Sequelize.STRING(60),
                    allowNull: false,
                    unique: true,
                }),
                queryInterface.addColumn("vehiclehistory", "regId", {
                    type: Sequelize.STRING(60),
                    allowNull: false,
                    unique: false,
                }),
            ]);
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(() => {
            return Promise.all([
                queryInterface.changeColumn("vehiclehistory", "id"),
                queryInterface.addColumn("vehiclehistory", "regId"),
            ]);
        });
    },
};