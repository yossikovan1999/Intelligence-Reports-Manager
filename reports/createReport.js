import { nanoid } from 'nanoid'


//==========================================
//               generate Id
//==========================================
function generateId(){

    const id = nanoid();

    if(typeof id !== 'string'){
        throw new Error("The uniqe id is not a number or a integer!");
    }

    return id;
}


//==========================================
//              create Report
//==========================================
function createReport(name="Muhammad — unknown last name", weapons=[], text=""){
    
    
    return {
        id : generateId(),
        terroristName : name,
        weapons : weapons,
        text : text
    }

}

export default createReport;