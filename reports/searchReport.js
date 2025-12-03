import database from "../db/database.js"


//=========================================
//               searchDb
//=========================================
function searchDb(id) {

    const result = database.find((report) => report.id === id);
    
    

    if (result === undefined) {
        throw new Error("The id was not found in the database!")
    }

    return result;

}

//=========================================
//            searchReportById
//=========================================
function searchReportById(id) {

    if (typeof id != 'string') {
        throw new Error("The id type must be a string!")
    }

    return searchDb(id)

}

export default searchReportById