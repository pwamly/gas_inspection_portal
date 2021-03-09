"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(() => {
            return Promise.all([
                queryInterface.addColumn("vehiclereports", "cylinderSerialNo1", {
                    type: Sequelize.STRING(60),
                    allowNull: false,
                }),
                queryInterface.addColumn("vehiclereports", "cylinderSerialNo2", {
                    type: Sequelize.STRING(60),
                    allowNull: false,
                }),
                queryInterface.addColumn("vehiclereports", "cylinderSerialNo3", {
                    type: Sequelize.STRING(60),
                    allowNull: false,
                }),
            ]);
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(() => {
            return Promise.all([
                queryInterface.addColumn("vehiclereports", "cylinderSerialNo1"),
                queryInterface.addColumn("vehiclereports", "cylinderSerialNo2"),
                queryInterface.addColumn("vehiclereports", "cylinderSerialNo3"),
                queryInterface.removeColumn("vehiclereports", "cylinderSerialNo"),
            ]);
        });
    },
};