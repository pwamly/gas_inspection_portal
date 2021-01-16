"use strict";
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable("nb_user", {
            id: {
                type: Sequelize.UUID,
                allowNull: false,
                primaryKey: true,
                defaultValue: Sequelize.UUID4,
            },
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable("nb_user");
    },
};