import database from '../db/database.js';
import reportKeys from '../db/reportKeys.js';

//==========================================
//             validate keys
//==========================================
function validateKeys(report){
 
    const keys = Object.keys(report);

    if (keys.length !== reportKeys.length){
        throw new Error("missing some keys or some unknown keys added")
    }

    for (const key of keys){

        if(!reportKeys.includes(key)){
            throw new Error(`Error : Key - ${key} not included in the object!`);
        }
    }

}


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
    
    //validate all keys exist.
    validateKeys(report);

    //validate id is unque.
    validateUnique(report.id);
    
    //push the report to the reporst array (db).
    database.push(report);

}

export default saveReport;