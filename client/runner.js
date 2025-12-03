import readlineSync from 'readline-sync';
import {USER_MESSAGE} from '../consts.js';
import clientAddReport from './clientAddReport.js';
import {getAllReports} from "../reports/listReports.js";
import deleteReport from "../reports/deleteReport.js";
import searchReportById from "../reports/searchReport.js";
import clientEditReport from "./clientEditReport.js";


//====================================
//         handle User Input
//====================================
function handleUserInput(input){
    
    let report;

    switch(input){
        case "1" : 
            clientAddReport();
            break;
        case "2":
            console.log(getAllReports());
            break;
        case "3":
            report = searchReportById(readlineSync.question("please enter id:"));
            console.log(report);
            break;
        case "4":
            report = deleteReport(readlineSync.question("please enter id:"));
            console.log(report);
            break;
        case "5":
             clientEditReport();
        case "0":
            return false;

            
    }

    return true;

}

//====================================
//
//====================================
function run(){
    
    let loop = true

    while(loop){
        
        try{
            const input = readlineSync.question(USER_MESSAGE);
            loop = handleUserInput(input);
        }catch(error){
           console.error("Error occured:", error.message);
        }
    }    
}

run();