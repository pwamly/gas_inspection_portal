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
    } = req.body;
    const payload = {
        id: uuidv4(),
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
        inspectorID,
        createdAt: date,
        updatedAt: date,
    };
    try {
        const [cylinder, created] = await vehiclereports.findOrCreate({
            where: {
                [Op.or]: {
                    vihecleRegno,
                    cylinderSerialNo1,
                    cylinderSerialNo2,
                    cylinderSerialNo3,
                },
            },
            defaults: payload,
        });
        if (cylinder) {
            console.log("cylinder already exist", cylinder);
        }
        if (created) {
            console.log("cylinder or vehicle created");
        }
    } catch (error) {
        console.log("error at report creation", error);
    }
};