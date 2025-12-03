import database from "../db/database.js";



//======================================
//              sortById
//======================================
function sortBy(arr, field) {
    
    arr.sort((obj1, obj2) => {
        return obj1[field] < obj2[field] ? -1 : obj1[field] > obj2[field] ? 1 : 0;
    })

   
    return arr;
}

//======================================
//            getAllReports
//======================================
function getAllReportsByField(field) {

    if (field !== "name" && filed != "id") {
        throw new Error(`Error : Cannot sort by this field = ${field}`)
    }

    return sortBy([...database], field);

}

//======================================
//            getAllReports
//======================================
function getAllReports() {

    return sortBy([...database], "id");

}


export { getAllReports, getAllReportsByField };