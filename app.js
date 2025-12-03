import createReport from "././reports/createReport.js";
import saveReport from "./reports/saveReports.js";
import database from "./db/database.js";
import { getAllReports, getAllReportsByField } from "./reports/listReports.js";
import searchReportById from "./reports/searchReport.js";
import deleteReport from "./reports/deleteReport.js";

function main() {
    try {

        const report1 = createReport('1', 'a', 'b', 'c', 'd');
        saveReport(report1);
        console.log(database);

        let report2 = createReport();
        saveReport(report2);

        deleteReport(report2.id);
       
        

       
        console.log(database);

        const arr = [];
        arr.sort();

        console.log("sorted", getAllReports());

    } catch (error) {
        console.log(error)
    }

}

main();