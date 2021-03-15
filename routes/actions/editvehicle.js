"use strict";

import { v4 as uuidv4 } from "uuid";
import { vehiclereports } from "../../models";
const { Model, Op } = require("sequelize");

module.exports = async(req, res) => {
    const { id: inspectorID } = req.payload;
    const date = new Date();

    const {
        id,
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
        expiryDate3,
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
        expiryDate1,
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
        expiryDate2,
        tbscertificate2,
        validfrom,
    } = req.body;

    let initialdate = new Date(validfrom);
    let validto = new Date(initialdate.setMonth(initialdate.getMonth() + 6));

    const payload = {
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
        expiryDate3,
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
        expiryDate1,
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
        expiryDate2,
        tbscertificate2,
        validfrom,
        inspectorID,
        updatedAt: date,
    };
    try {
        const update = await vehiclereports.update({...payload }, { where: { id } });
        if (update == 1) {
            console.log("successful updated", update);
            return res.json({
                successful: true,
                message: "successful updated",
            });
        } else {
            return res.json({
                successful: false,
                message: "Up to date",
            });
        }
    } catch (error) {
        console.log("error at report creation", error);
        return res.status(403).json({
            successful: false,
            message: "Failed",
        });
    }
};