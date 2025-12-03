import readlineSync from 'readline-sync';
import updateReport from '../reports/updateReports.js';

function clientEditReport() {

    const reportId = readlineSync.question("Please select the report you wish to edit:");
    const editReportData = {};
    
    let loop = true;

    do {
        const key = readlineSync.question("Please enter the key:");
        const value = readlineSync.question("Please enter the value:");

        editReportData[key] = value;

        loop = readlineSync.question("enter 0 to exit entering values:") === '0' ? false : false;

    } while (loop)

    console.log(editReportData)
    updateReport(reportId, editReportData);    
}

export default clientEditReport;