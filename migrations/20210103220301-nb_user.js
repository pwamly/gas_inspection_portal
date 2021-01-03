"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.addColumn(
                    "nb_users",
                    "id", {
                        type: Sequelize.UUID,
                        allowNull: false,
                        primaryKey: true,
                        defaultValue: Sequelize.UUID4,
                    }, { transaction: t }
                ),
                queryInterface.addColumn(
                    "nb_users",
                    "first_name", {
                        type: Sequelize.STRING(60),
                        allowNull: false,
                    }, { underscored: true, transaction: t }
                ),
                queryInterface.addColumn(
                    "nb_users",
                    "last_name", {
                        type: Sequelize.STRING(60),
                        allowNull: false,
                    }, { underscored: true, transaction: t }
                ),
                queryInterface.addColumn(
                    "nb_users",
                    "username", {
                        type: Sequelize.STRING,
                        allowNull: false,
                        field: "username",
                    }, { transaction: t }
                ),
                queryInterface.addColumn(
                    "nb_users",
                    "email", {
                        type: Sequelize.STRING,
                        allowNull: false,
                        field: "email",
                    }, { transaction: t }
                ),
                queryInterface.addColumn(
                    "nb_users",
                    "password", {
                        type: Sequelize.STRING(128),
                        allowNull: false,
                    }, { transaction: t }
                ),
            ]);
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.removeColumn("nb_users", "id", { transaction: t }),
                queryInterface.removeColumn("nb_users", "first_name", {
                    transaction: t,
                }),
                queryInterface.removeColumn("nb_users", "last_name", {
                    transaction: t,
                }),
                queryInterface.removeColumn("nb_users", "username", { transaction: t }),
                queryInterface.removeColumn("nb_users", "email", { transaction: t }),
                queryInterface.removeColumn("nb_users", "password", { transaction: t }),
            ]);
        });
    },
};