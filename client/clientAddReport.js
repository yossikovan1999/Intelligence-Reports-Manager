import readlineSync from 'readline-sync';
import createReport from "../reports/createReport.js";
import saveReport from '../reports/saveReports.js';

export default function clientAddReport(){
     
     let name, weapons, text;

     name = readlineSync.question("Please enter the name: ");
     weapons = readlineSync.question("Please enter a list of weapons seperated by space: ");
     
     weapons = weapons.split(" ");

     text = readlineSync.question("Please enter text that will be written in the report: ");
     
     const report = createReport(name, weapons, text);
    
     saveReport(report);


}