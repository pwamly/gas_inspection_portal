"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.addColumn("nb_user", "id", {
                    type: Sequelize.UUID,
                    allowNull: false,
                    primaryKey: true,
                    defaultValue: Sequelize.UUID4,
                }),
                queryInterface.addColumn(
                    "nb_user",
                    "first_name", {
                        type: Sequelize.STRING(60),
                        allowNull: false,
                    }, { underscored: true, transaction: t }
                ),
                queryInterface.addColumn(
                    "nb_user",
                    "last_name", {
                        type: Sequelize.STRING(60),
                        allowNull: false,
                    }, { underscored: true, transaction: t }
                ),
                queryInterface.addColumn("nb_user", "username", {
                    type: Sequelize.STRING,
                    allowNull: false,
                    field: "username",
                }),
                queryInterface.addColumn("nb_user", "email", {
                    type: Sequelize.STRING,
                    allowNull: false,
                    field: "email",
                }),
                queryInterface.addColumn("nb_user", "password", {
                    type: Sequelize.STRING(128),
                    allowNull: false,
                }),
            ]);
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.removeColumn("nb_user", "id"),
                queryInterface.removeColumn("nb_user", "first_name", {
                    transaction: t,
                }),
                queryInterface.removeColumn("nb_user", "last_name", {
                    transaction: t,
                }),
                queryInterface.removeColumn("nb_user", "username"),
                queryInterface.removeColumn("nb_user", "email"),
                queryInterface.removeColumn("nb_user", "password"),
            ]);
        });
    },
};