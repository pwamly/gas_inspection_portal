"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.addColumn(
                    "nb_users",
                    "dob", {
                        type: Sequelize.DATEONLY,
                        allowNull: true,
                    }, { transaction: t }
                ),
                queryInterface.addColumn(
                    "nb_users",
                    "gender", {
                        type: Sequelize.ENUM("M", "F"),
                        allowNull: true,
                    }, { transaction: t }
                ),
            ]);
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.removeColumn("nb_users", "dob", { transaction: t }),
                queryInterface.removeColumn("nb_users", "gender", { transaction: t }),
            ]);
        });
    },
};