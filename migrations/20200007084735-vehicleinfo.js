"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.addColumn("vehicleinfos", "id", {
                    type: Sequelize.UUID,
                    allowNull: false,
                    primaryKey: true,
                    defaultValue: Sequelize.UUID4,
                    unique: true,
                }),
                queryInterface.addColumn("vehicleinfos", "name", {
                    type: Sequelize.STRING(60),
                    allowNull: false,
                }),
                queryInterface.addColumn("vehicleinfos", "email", {
                    type: Sequelize.STRING(60),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "phone", {
                    type: Sequelize.STRING,
                    allowNull: false,
                }),
                queryInterface.addColumn("vehicleinfos", "location", {
                    type: Sequelize.STRING(128),
                    allowNull: false,
                }),
                queryInterface.addColumn("vehicleinfos", "periodic", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "afterAccident", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "ownername", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "vihecleRegno", {
                    type: Sequelize.STRING(128),
                    allowNull: false,
                }),
                queryInterface.addColumn("vehicleinfos", "manYear", {
                    allowNull: false,
                    type: Sequelize.DATE,
                }),
                queryInterface.addColumn("vehicleinfos", "make", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "model", {
                    type: Sequelize.STRING(128),
                    allowNull: false,
                }),
                queryInterface.addColumn("vehicleinfos", "chasisno", {
                    type: Sequelize.STRING(128),
                    allowNull: false,
                }),
                queryInterface.addColumn("vehicleinfos", "engineno", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "milliege", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "biFuel", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "Dedicated", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "DualFuel", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "type", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "manufacturer", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "serialno", {
                    type: Sequelize.STRING(128),
                    allowNull: false,
                }),
                queryInterface.addColumn("vehicleinfos", "installername", {
                    type: Sequelize.STRING(128),
                    allowNull: false,
                }),
                queryInterface.addColumn("vehicleinfos", "cylinderposition3", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "cylindertype3", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "cmanufacturer3", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "cmanuContact3", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "servicepressure3", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "cmanufacturedDate3", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "cmanuContact3", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "waterVolume3", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "cexpiryDate3", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "tbscertificate3", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "cylinderno1", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "cylinderposition1", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "cylindertype1", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "cmanufacturer1", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "servicepressure1", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "cmanufacturedDate1", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "waterVolume1", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "cexpiryDate1", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }), ,
                queryInterface.addColumn("vehicleinfos", "tbscertificate1", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }), ,
                queryInterface.addColumn("vehicleinfos", "cylinderno2", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }), ,
                queryInterface.addColumn("vehicleinfos", "cylinderSerialNo", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }), ,
                queryInterface.addColumn("vehicleinfos", "cylinderposition2", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "cylindertype2", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "cmanufacturer2", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "servicepressure2", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "cmanufacturedDate2", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "waterVolume2", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "cexpiryDate2", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "tbscertificate2", {
                    type: Sequelize.STRING(128),
                    allowNull: true,
                }),
                queryInterface.addColumn("vehicleinfos", "inspectorID", {
                    type: Sequelize.STRING(128),
                    allowNull: false,
                }),
            ]);
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(() => {
            return Promise.all([
                queryInterface.removeColumn("vehicleinfos", "id"),
                queryInterface.removeColumn("vehicleinfos", "name"),
                queryInterface.removeColumn("vehicleinfos", "email"),
                queryInterface.removeColumn("vehicleinfos", "phone"),
                queryInterface.removeColumn("vehicleinfos", "plateno"),
                queryInterface.removeColumn("vehicleinfos", "location"),
                queryInterface.removeColumn("vehicleinfos", "newInstallation"),
                queryInterface.removeColumn("vehicleinfos", "periodic"),
                queryInterface.removeColumn("vehicleinfos", "afterAccident"),
                queryInterface.removeColumn("vehicleinfos", "ownername"),
                queryInterface.removeColumn("vehicleinfos", "vihecleRegno"),
                queryInterface.removeColumn("vehicleinfos", "manYear"),
                queryInterface.removeColumn("vehicleinfos", "make"),
                queryInterface.removeColumn("vehicleinfos", "model"),
                queryInterface.removeColumn("vehicleinfos", "chasisno"),
                queryInterface.removeColumn("vehicleinfos", "engineno"),
                queryInterface.removeColumn("vehicleinfos", "milliege"),
                queryInterface.removeColumn("vehicleinfos", "biFuel"),
                queryInterface.removeColumn("vehicleinfos", "Dedicated"),
                queryInterface.removeColumn("vehicleinfos", "DualFuel"),
                queryInterface.removeColumn("vehicleinfos", "type"),
                queryInterface.removeColumn("vehicleinfos", "manufacturer"),
                queryInterface.removeColumn("vehicleinfos", "serialno"),
                queryInterface.removeColumn("vehicleinfos", "installername"),
                queryInterface.removeColumn("vehicleinfos", "cylinderno3"),
                queryInterface.removeColumn("vehicleinfos", "cylinderposition3"),
                queryInterface.removeColumn("vehicleinfos", "cylinderSerialNo3"),
                queryInterface.removeColumn("vehicleinfos", "cylindertype3"),
                queryInterface.removeColumn("vehicleinfos", "cmanufacturer3"),
                queryInterface.removeColumn("vehicleinfos", "cmanuContact3"),
                queryInterface.removeColumn("vehicleinfos", "servicepressure3"),
                queryInterface.removeColumn("vehicleinfos", "cmanufacturedDate3"),
                queryInterface.removeColumn("vehicleinfos", "waterVolume3"),
                queryInterface.removeColumn("vehicleinfos", "cexpiryDate3"),
                queryInterface.removeColumn("vehicleinfos", "tbscertificate3"),
                queryInterface.removeColumn("vehicleinfos", "cylinderno1"),
                queryInterface.removeColumn("vehicleinfos", "cylinderposition1"),
                queryInterface.removeColumn("vehicleinfos", "cylindertype1"),
                queryInterface.removeColumn("vehicleinfos", "cylinderSerialNo1"),
                queryInterface.removeColumn("vehicleinfos", "cmanufacturer1"),
                queryInterface.removeColumn("vehicleinfos", "cmanuContact1"),
                queryInterface.removeColumn("vehicleinfos", "servicepressure1"),
                queryInterface.removeColumn("vehicleinfos", "cmanufacturedDate1"),
                queryInterface.removeColumn("vehicleinfos", "waterVolume1"),
                queryInterface.removeColumn("vehicleinfos", "cexpiryDate1"),
                queryInterface.removeColumn("vehicleinfos", "tbscertificate1"),
                queryInterface.removeColumn("vehicleinfos", "cylinderno2"),
                queryInterface.removeColumn("vehicleinfos", "cylinderSerialNo2"),
                queryInterface.removeColumn("vehicleinfos", "cylinderposition2"),
                queryInterface.removeColumn("vehicleinfos", "cylindertype2"),
                queryInterface.removeColumn("vehicleinfos", "cmanufacturer2"),
                queryInterface.removeColumn("vehicleinfos", "cmanuContact2"),
                queryInterface.removeColumn("vehicleinfos", "servicepressure2"),
                queryInterface.removeColumn("vehicleinfos", "waterVolume2"),
                queryInterface.removeColumn("vehicleinfos", "cexpiryDate2"),
                queryInterface.removeColumn("vehicleinfos", "tbscertificate2"),
                queryInterface.removeColumn("vehicleinfos", "inspectorID"),
            ]);
        });
    },
};