"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(() => {
            return Promise.all([
                queryInterface.addColumn("vehiclereports", "inspectorId", {
                    type: Sequelize.STRING(60),
                    allowNull: false,
                }),
                queryInterface.addColumn("vehiclereports", "validto", {
                    type: Sequelize.DATE,
                    allowNull: false,
                }),
                queryInterface.changeColumn("vehiclereports", "manYear", {
                    allowNull: false,
                    type: Sequelize.STRING(60),
                }),
                queryInterface.changeColumn("vehiclereports", "cexpiryDate1", {
                    type: Sequelize.DATE,
                    allowNull: true,
                }),
                queryInterface.changeColumn("vehiclereports", "cexpiryDate2", {
                    type: Sequelize.DATE,
                    allowNull: true,
                }),
                queryInterface.changeColumn("vehiclereports", "cexpiryDate3", {
                    type: Sequelize.DATE,
                    allowNull: true,
                }),
                queryInterface.changeColumn("vehiclereports", "cmanufacturedDate1", {
                    type: Sequelize.DATE,
                    allowNull: true,
                }),
                queryInterface.changeColumn("vehiclereports", "cmanufacturedDate2", {
                    type: Sequelize.DATE,
                    allowNull: true,
                }),
                queryInterface.changeColumn("vehiclereports", "cmanufacturedDate3", {
                    type: Sequelize.DATE,
                    allowNull: true,
                }),
            ]);
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(() => {
            return Promise.all([
                queryInterface.addColumn("vehiclereports", "inspectorId"),
                queryInterface.addColumn("vehiclereports", "validto"),
                queryInterface.changeColumn("vehiclereports", "manYear"),
                queryInterface.changeColumn("vehiclereports", "cmanufacturedDate1"),
                queryInterface.changeColumn("vehiclereports", "cmanufacturedDate2"),
                queryInterface.changeColumn("vehiclereports", "cmanufacturedDate3"),
                queryInterface.changeColumn("vehiclereports", "cexpiryDate1"),
                queryInterface.changeColumn("vehiclereports", "cexpiryDate2"),
                queryInterface.changeColumn("vehiclereports", "cexpiryDate3"),
            ]);
        });
    },
};