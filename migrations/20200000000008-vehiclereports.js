"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(() => {
            return Promise.all([
                queryInterface.changeColumn("vehiclereports", "cylinderno3", {
                    type: Sequelize.STRING(60),
                    allowNull: false,
                }),
                queryInterface.changeColumn("vehiclereports", "cmanuContact1", {
                    type: Sequelize.STRING(60),
                    allowNull: false,
                }),
                queryInterface.changeColumn("vehiclereports", "cmanuContact2", {
                    type: Sequelize.STRING(60),
                    allowNull: false,
                }),
                queryInterface.changeColumn("vehiclereports", "newInstallation", {
                    type: Sequelize.STRING(60),
                    allowNull: false,
                }),
            ]);
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(() => {
            return Promise.all([
                queryInterface.changeColumn("vehiclereports", "cylinderno3"),
                queryInterface.changeColumn("vehiclereports", "cmanuContact1"),
                queryInterface.changeColumn("vehiclereports", "cmanuContact2"),
                queryInterface.changeColumn("vehiclereports", "newInstallation"),
            ]);
        });
    },
};