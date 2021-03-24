"use strict";
const { Model, Op } = require("sequelize");
require("dotenv").config();

module.exports = (sequelize, DataTypes) => {
    const vehiclehistory = sequelize.define(
        "vehiclehistory", {
            id: {
                type: DataTypes.UUID,
                allowNull: true,
                defaultValue: DataTypes.UUID4,
                unique: true,
                primaryKey: true,
            },
            regId: {
                type: DataTypes.STRING(60),
                allowNull: false,
                unique: false,
            },
            name: {
                type: DataTypes.STRING(60),
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING(60),
                allowNull: true,
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            location: {
                type: DataTypes.STRING(128),
                allowNull: false,
            },
            periodic: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            afterAccident: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            ownername: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            vihecleRegno: {
                type: DataTypes.STRING(128),
                allowNull: false,
            },
            manYear: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            make: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            model: {
                type: DataTypes.STRING(128),
                allowNull: false,
            },
            chasisno: {
                type: DataTypes.STRING(128),
                allowNull: false,
            },
            engineno: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            milliege: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            biFuel: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            Dedicated: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            DualFuel: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            type: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            manufacturer: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            serialno: {
                type: DataTypes.STRING(128),
                allowNull: false,
            },
            installername: {
                type: DataTypes.STRING(128),
                allowNull: false,
            },
            newInstallation: {
                type: DataTypes.STRING(128),
                allowNull: false,
            },
            cylinderposition3: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            cylindertype3: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            cmanufacturer3: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            cmanuContact1: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            servicepressure3: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            cmanufacturedDate3: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            cmanuContact2: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            cmanuContact3: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            waterVolume3: {
                type: DataTypes.STRING(128),
                allowNull: false,
            },
            cexpiryDate3: {
                type: DataTypes.STRING(128),
                allowNull: false,
            },
            tbscertificate3: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            cylinderno1: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            cylinderposition1: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            cylindertype1: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            cmanufacturer1: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            servicepressure1: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            cmanufacturedDate1: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            waterVolume1: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            cexpiryDate1: {
                type: DataTypes.STRING(128),
                allowNull: false,
            },
            tbscertificate1: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            cylinderno2: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            cylinderno3: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            cylinderSerialNo1: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            cylinderSerialNo2: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            cylinderSerialNo3: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            cylinderposition2: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            cylindertype2: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            cmanufacturer2: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            servicepressure2: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            cmanufacturedDate2: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            waterVolume2: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            cexpiryDate2: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            tbscertificate2: {
                type: DataTypes.STRING(128),
                allowNull: true,
            },
            inspectorID: {
                type: DataTypes.STRING(128),
                allowNull: false,
            },
            validto: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            validfrom: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updatedAt: {
                primaryKey: true,
                allowNull: false,
                type: DataTypes.DATE,
            },
        }, {
            tableName: "vehiclehistory",
            modelName: "vehiclehistory",
            underscored: false,
            timestamps: false,
            scopes: {},
        }
    );

    return vehiclehistory;
};