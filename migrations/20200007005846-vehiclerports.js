"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.addColumn("vehiclereports", "id", {
                    type: Sequelize.UUID,
                    allowNull: false,
                    primaryKey: true,
                    defaultValue: Sequelize.UUID4,
                    unique: true,
                }),
                queryInterface.addColumn("vehiclereports", "name", {
                    type: Sequelize.STRING(60),
                    allowNull: false,
                }),
                queryInterface.addColumn("vehiclereports", "email", {
                    type: Sequelize.STRING(60),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "phone", {
                    type: Sequelize.STRING,
                    allowNull: false,
                }),
                queryInterface.addColumn("vehiclereports", "location", {
                    type: Sequelize.STRING(128),
                    allowNull: false,
                }),
                queryInterface.addColumn("vehiclereports", "periodic", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "afterAccident", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "ownername", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "vihecleRegno", {
                    type: Sequelize.STRING(128),
                    allowNull: false,
                }),
                queryInterface.addColumn("vehiclereports", "manYear", {
                    allowNull: false,
                    type: Sequelize.DATE,
                }),
                queryInterface.addColumn("vehiclereports", "make", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "model", {
                    type: Sequelize.STRING(128),
                    allowNull: false,
                }),
                queryInterface.addColumn("vehiclereports", "chasisno", {
                    type: Sequelize.STRING(128),
                    allowNull: false,
                }),
                queryInterface.addColumn("vehiclereports", "engineno", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "milliege", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "biFuel", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "Dedicated", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "DualFuel", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "type", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "manufacturer", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "serialno", {
                    type: Sequelize.STRING(128),
                    allowNull: false,
                }),
                queryInterface.addColumn("vehiclereports", "installername", {
                    type: Sequelize.STRING(128),
                    allowNull: false,
                }),
                queryInterface.addColumn("vehiclereports", "cylinderposition3", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "cylindertype3", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "cmanufacturer3", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "cmanuContact3", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "servicepressure3", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "cmanufacturedDate3", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "cmanuContact3", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "waterVolume3", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "cexpiryDate3", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "tbscertificate3", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "cylinderno1", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "cylinderposition1", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "cylindertype1", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "cmanufacturer1", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "servicepressure1", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "cmanufacturedDate1", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "waterVolume1", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "cexpiryDate1", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }), ,
                queryInterface.addColumn("vehiclereports", "tbscertificate1", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }), ,
                queryInterface.addColumn("vehiclereports", "cylinderno2", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }), ,
                queryInterface.addColumn("vehiclereports", "cylinderSerialNo", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }), ,
                queryInterface.addColumn("vehiclereports", "cylinderposition2", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "cylindertype2", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "cmanufacturer2", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "servicepressure2", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "cmanufacturedDate2", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "waterVolume2", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "cexpiryDate2", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "tbscertificate2", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehiclereports", "inspectorID", {
                    type: Sequelize.STRING(128),
                    allowNull: false,
                }),
            ]);
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(() => {
            return Promise.all([
                queryInterface.removeColumn("vehiclereports", "id"),
                queryInterface.removeColumn("vehiclereports", "name"),
                queryInterface.removeColumn("vehiclereports", "email"),
                queryInterface.removeColumn("vehiclereports", "phone"),
                queryInterface.removeColumn("vehiclereports", "plateno"),
                queryInterface.removeColumn("vehiclereports", "location"),
                queryInterface.removeColumn("vehiclereports", "newInstallation"),
                queryInterface.removeColumn("vehiclereports", "periodic"),
                queryInterface.removeColumn("vehiclereports", "afterAccident"),
                queryInterface.removeColumn("vehiclereports", "ownername"),
                queryInterface.removeColumn("vehiclereports", "vihecleRegno"),
                queryInterface.removeColumn("vehiclereports", "manYear"),
                queryInterface.removeColumn("vehiclereports", "make"),
                queryInterface.removeColumn("vehiclereports", "model"),
                queryInterface.removeColumn("vehiclereports", "chasisno"),
                queryInterface.removeColumn("vehiclereports", "engineno"),
                queryInterface.removeColumn("vehiclereports", "milliege"),
                queryInterface.removeColumn("vehiclereports", "biFuel"),
                queryInterface.removeColumn("vehiclereports", "Dedicated"),
                queryInterface.removeColumn("vehiclereports", "DualFuel"),
                queryInterface.removeColumn("vehiclereports", "type"),
                queryInterface.removeColumn("vehiclereports", "manufacturer"),
                queryInterface.removeColumn("vehiclereports", "serialno"),
                queryInterface.removeColumn("vehiclereports", "installername"),
                queryInterface.removeColumn("vehiclereports", "cylinderno3"),
                queryInterface.removeColumn("vehiclereports", "cylinderposition3"),
                queryInterface.removeColumn("vehiclereports", "cylinderSerialNo3"),
                queryInterface.removeColumn("vehiclereports", "cylindertype3"),
                queryInterface.removeColumn("vehiclereports", "cmanufacturer3"),
                queryInterface.removeColumn("vehiclereports", "cmanuContact3"),
                queryInterface.removeColumn("vehiclereports", "servicepressure3"),
                queryInterface.removeColumn("vehiclereports", "cmanufacturedDate3"),
                queryInterface.removeColumn("vehiclereports", "waterVolume3"),
                queryInterface.removeColumn("vehiclereports", "cexpiryDate3"),
                queryInterface.removeColumn("vehiclereports", "tbscertificate3"),
                queryInterface.removeColumn("vehiclereports", "cylinderno1"),
                queryInterface.removeColumn("vehiclereports", "cylinderposition1"),
                queryInterface.removeColumn("vehiclereports", "cylindertype1"),
                queryInterface.removeColumn("vehiclereports", "cylinderSerialNo1"),
                queryInterface.removeColumn("vehiclereports", "cmanufacturer1"),
                queryInterface.removeColumn("vehiclereports", "cmanuContact1"),
                queryInterface.removeColumn("vehiclereports", "servicepressure1"),
                queryInterface.removeColumn("vehiclereports", "cmanufacturedDate1"),
                queryInterface.removeColumn("vehiclereports", "waterVolume1"),
                queryInterface.removeColumn("vehiclereports", "cexpiryDate1"),
                queryInterface.removeColumn("vehiclereports", "tbscertificate1"),
                queryInterface.removeColumn("vehiclereports", "cylinderno2"),
                queryInterface.removeColumn("vehiclereports", "cylinderSerialNo2"),
                queryInterface.removeColumn("vehiclereports", "cylinderposition2"),
                queryInterface.removeColumn("vehiclereports", "cylindertype2"),
                queryInterface.removeColumn("vehiclereports", "cmanufacturer2"),
                queryInterface.removeColumn("vehiclereports", "cmanuContact2"),
                queryInterface.removeColumn("vehiclereports", "servicepressure2"),
                queryInterface.removeColumn("vehiclereports", "waterVolume2"),
                queryInterface.removeColumn("vehiclereports", "cexpiryDate2"),
                queryInterface.removeColumn("vehiclereports", "tbscertificate2"),
                queryInterface.removeColumn("vehiclereports", "inspectorID"),
            ]);
        });
    },
};