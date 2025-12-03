import database from "../db/database.js";


//=============================================
//                 delete Report
//=============================================
function deleteReport(id){

    const index = database.findIndex((report)=>report.id === id);

    if(index === -1){
        throw new Error("The report id was not found in the database!");
    }
    
    console.log("database before", database);

    const deleted = database.splice(index, 1);

    if (deleted.length === 0){
        throw new Error("Could not delete the report from the database!");
    }
}


export default deleteReport;
