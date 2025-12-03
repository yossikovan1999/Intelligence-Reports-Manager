import database from '../db/database.js';
import reportKeys from '../db/reportKeys.js';

//==========================================
//             validate Unique
//==========================================
function validateUnique(id){

    for(const report of database){
        if(report.id === id){
            throw new Error("Id exists in the database, cannot add the current report!")
        }
    }
}

//==========================================
//               save Report
//==========================================
function saveReport(report){

    validateUnique(report.id);

}

export default saveReport;