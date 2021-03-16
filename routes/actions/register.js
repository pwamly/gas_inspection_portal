"use strict";

import { v4 as uuidv4 } from "uuid";
import { vehiclereports } from "../../models";
const { Model, Op } = require("sequelize");

module.exports = async(req, res) => {
    const { id: inspectorID } = req.payload;

    const date = new Date();

    const {
        name,
        email,
        phone,
        plateno,
        location,
        newInstallation,
        periodic,
        afterAccident,
        ownername,
        vihecleRegno,
        manYear,
        make,
        model,
        chasisno,
        engineno,
        milliege,
        biFuel,
        Dedicated,
        DualFuel,
        type,
        manufacturer,
        serialno,
        installername,
        cylinderno3,
        cylinderposition3,
        cylinderSerialNo3,
        cylindertype3,
        cmanufacturer3,
        cmanuContact3,
        servicepressure3,
        cmanufacturedDate3,
        waterVolume3,
        cexpiryDate3,
        tbscertificate3,
        cylinderno1,
        cylinderposition1,
        cylindertype1,
        cylinderSerialNo1,
        cmanufacturer1,
        cmanuContact1,
        servicepressure1,
        cmanufacturedDate1,
        waterVolume1,
        cexpiryDate1,
        tbscertificate1,
        cylinderno2,
        cylinderSerialNo2,
        cylinderposition2,
        cylindertype2,
        cmanufacturer2,
        cmanuContact2,
        servicepressure2,
        cmanufacturedDate2,
        waterVolume2,
        cexpiryDate2,
        tbscertificate2,
        validfrom,
    } = req.body;

    let initialdate = new Date(validfrom);
    let validto = new Date(initialdate.setMonth(initialdate.getMonth() + 6));
    const payload = {
        id: uuidv4(),
        name,
        email,
        phone,
        location,
        newInstallation,
        periodic,
        afterAccident,
        ownername,
        vihecleRegno,
        manYear,
        make,
        model,
        chasisno,
        engineno,
        milliege,
        biFuel,
        Dedicated,
        DualFuel,
        type,
        manufacturer,
        serialno,
        installername,
        cylinderno3,
        cylinderposition3,
        cylinderSerialNo3,
        cylindertype3,
        cmanufacturer3,
        cmanuContact3,
        servicepressure3,
        cmanufacturedDate3,
        waterVolume3,
        cexpiryDate3,
        tbscertificate3,
        cylinderno1,
        cylinderposition1,
        cylindertype1,
        cylinderSerialNo1,
        cmanufacturer1,
        cmanuContact1,
        servicepressure1,
        cmanufacturedDate1,
        waterVolume1,
        cexpiryDate1,
        tbscertificate1,
        cylinderno2,
        cylinderSerialNo2,
        cylinderposition2,
        cylindertype2,
        cmanufacturer2,
        cmanuContact2,
        servicepressure2,
        cmanufacturedDate2,
        waterVolume2,
        cexpiryDate2,
        tbscertificate2,
        inspectorID,
        validfrom,
        validto,
        validfrom,
        createdAt: date,
        updatedAt: date,
    };
    try {
        let cylinder1, cylinder2, cylinder3;
        if (cylinderSerialNo1 !== "" || null) {
            cylinder1 = await vehiclereports.findOne({
                where: {
                    [Op.or]: {
                        cylinderSerialNo1,
                    },
                },
                raw: true,
            });
        }
        if (cylinderSerialNo2 !== "" || null) {
            cylinder2 = await vehiclereports.findOne({
                where: {
                    [Op.or]: {
                        cylinderSerialNo2,
                    },
                },
                raw: true,
            });
        }
        if (cylinderSerialNo3 !== "" || null) {
            cylinder3 = await vehiclereports.findOne({
                where: {
                    [Op.or]: {
                        cylinderSerialNo3,
                    },
                },
                raw: true,
            });
        }
        if (cylinder1 || cylinder2 || cylinder3) {
            console.log("cylinder already exist", cylinder);
            return res.status(403).json({
                successful: false,
                message: "Vehicle or cylinder already exist",
            });
        } else {
            const created = await vehiclereports.create({
                ...payload,
            });
            if (created) {
                console.log("cylinder or vehicle created");
                return res.json({
                    successful: true,
                    message: "vehicle registered",
                });
            }
        }
    } catch (error) {
        console.log(error);
        return res.json({
            successful: false,
            message: "Failed",
        });
    }
};