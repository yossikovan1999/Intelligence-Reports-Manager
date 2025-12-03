import database from '../db/database.js';
import { validateKeys, validateUnique } from './validateReport.js';


//==========================================
//               save Report
//==========================================
function saveReport(report){
    
    //validate all keys exist.
    validateKeys(report);

    //validate id is unque.
    validateUnique(report.id);
    
    //push the report to the reporst array (db).
    database.push(report);
}

export default saveReport;