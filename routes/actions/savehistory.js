"use strict";

import { v4 as uuidv4 } from "uuid";
import { vehiclehistory } from "../../models";
const { Model, Op } = require("sequelize");

const isValidDate = (strDate) => {
    let myDatestr = new Date(strDate);
    if (!isNaN(myDatestr.getMonth())) {
        return true;
    }
    return false;
};

module.exports = async(oldreport) => {
    const date = new Date();
    let {
        id: regId,
        inspectorID,
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
        validfrom,
        validto,
        createdAt,
    } = oldreport;

    if (isValidDate(cexpiryDate1)) {
        cexpiryDate1 = new Date(cexpiryDate1)
            .toISOString()
            .slice(0, 10)
            .replace("T", " ");
    } else {
        cexpiryDate3 = "1970-00-00";
    }
    if (isValidDate(cexpiryDate2)) {
        cexpiryDate2 = new Date(cexpiryDate2)
            .toISOString()
            .slice(0, 10)
            .replace("T", " ");
    } else {
        cexpiryDate2 = "1970-00-00";
    }
    if (isValidDate(cexpiryDate3)) {
        cexpiryDate3 = new Date(cexpiryDate3)
            .toISOString()
            .slice(0, 10)
            .replace("T", " ");
    } else {
        cexpiryDate3 = "1970-00-00";
    }
    if (isValidDate(cmanufacturedDate1)) {
        cmanufacturedDate1 = new Date(cmanufacturedDate1)
            .toISOString()
            .slice(0, 10)
            .replace("T", " ");
    } else {
        cmanufacturedDate1 = "1970-00-00";
    }
    if (isValidDate(cmanufacturedDate2)) {
        cmanufacturedDate2 = new Date(cmanufacturedDate2)
            .toISOString()
            .slice(0, 10)
            .replace("T", " ");
    } else {
        cmanufacturedDate2 = "1970-00-00";
    }
    if (isValidDate(cmanufacturedDate3)) {
        cmanufacturedDate3 = new Date(cmanufacturedDate3)
            .toISOString()
            .slice(0, 10)
            .replace("T", " ");
    } else {
        cmanufacturedDate3 = "1970-00-00";
    }

    const payload = {
        id: uuidv4(),
        regId,
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
        createdAt,
        updatedAt: date,
    };
    try {
        const created = await vehiclehistory.create({
            ...payload,
        });
        if (created) {
            console.log("history saved");
            return {
                successful: true,
                message: "history saved",
            };
        }
    } catch (error) {
        console.log(error);
        return {
            successful: false,
            message: "Failed",
        };
    }
};