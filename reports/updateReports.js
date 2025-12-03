import searchReportById from "./searchReport.js";
import { validateUnique } from "./validateReport.js";
import reportKeys from "../db/reportKeys.js";


function validateKeys(updateValues) {

    for (const key in updateValues) {

        if (!reportKeys.includes(key)) {
            throw new Error("trying to update a key that does not exist!")
        }
    }
}
//========================================
//          update Report Helper
//========================================
function updateReportHelper(report, updateValues) {

    for (const key in updateValues) {
        report[key] = updateValues[key];
    }
}
//========================================
//            update Reports
//========================================

function updateReport(id, updateValues) {

    const report = searchReportById(id);

    //this will make sure that all keys exist in the report object.
    validateKeys(updateValues);


    //if one of the keys is a id ceck that it is unique.
    if ('id' in updateValues) {
        validateUnique(updateValues.id);
    }

    //update the report object.
    updateReportHelper(report, updateValues);

}


export default updateReport;