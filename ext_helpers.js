import * as FORD from './data/ford.js';
import * as VOLVO from "./data/volvo.js";

export const decodeFordVin = (vin) => {
    /*
        Test Vin: 1FMZU73K95UA03699
        2005 FORD EXPLORER
    */

    let modelTypeChars = vin.substr(4, 3);
    let modelType = modelTypeChars in FORD.modelCodes ? FORD.modelCodes[modelTypeChars] : "";
    if (modelType === "") {
        modelTypeChars = modelTypeChars[0] + modelTypeChars[1];
        modelType = modelTypeChars in FORD.modelCodes ? FORD.modelCodes[modelTypeChars] : "";
    }
    if (modelType === "") {
        modelTypeChars = modelTypeChars[0];
        modelType = modelTypeChars in FORD.modelCodes ? FORD.modelCodes[modelTypeChars] : "";
    }
    let wmiCode = vin.substr(0, 3);
    let wmi = wmiCode in FORD.wmis ? FORD.wmis[wmiCode] : "";
    let restraintType = "";
    let gvwr = "";
    let truck_van_arr = ['cab', 'expedition', 'navigator', 'excursion', 'escape', 'series', 'explorer', 'bronco', 'villager', 'edge', 'aviator', 'windstar', 'freestar']
    let truck_van = false;
    truck_van_arr.forEach(t => {
        if(modelType.toLowerCase().includes(t)){
            truck_van = true;
        }
    });
    if (!(truck_van)){
        restraintType = vin[3] in FORD.restraintCodes ? FORD.restraintCodes[vin[3]] : "";
    } else {
        gvwr = vin[3] in FORD.weightCodes ? FORD.weightCodes[vin[3]] : "";
    }

    let engChar = vin[7];

    return {
        wmi,
        restraintType,
        gvwr,
        truck_van,
        modelType
    }
};

export const decodeVolvoVin = (vin, year, country) => {
    /*
        Test Vin: YV1RH527552446951
        2005 VOLVO S60R
    */
    let series799 = ['700', '740', '760', '780', '940', '960', '90'];
    let series8678 = ['850', '60', '70', '80'];
    let series = {
        '799': false,
        '8678': false
    };


    let model = "";
    let sbp = "";
    let eng = "";
    let be = "";
    let gearbox = "";
    let plant = "";

    /* Decode Vehicle Code: position 4 */
    let vehCode = vin[3];
    let tableIndexA = -1;
    if(vehCode === 'a' && year > 2014){
        model = 'xc90';
    } else if( vehCode === 'm' && year > 2012){
        model = 'v40';
    } else {
        if (year > 1980 && year < 1999) {
            tableIndexA = 0;
        }
        if (year > 1998 && year < 2011) {
            tableIndexA = 1;
        }
        if (tableIndexA >= 0) {
            model = vehCode in VOLVO.vehicleCodes[tableIndexA] ? VOLVO.vehicleCodes[tableIndexA][vehCode] : "";
        }
    };
    series799.forEach(s => {
        if(model.includes(s)){
            series['799'] = true;
            return;
        }
    });
    series8678.forEach(s => {
        if (model.includes(s)) {
            series['8678'] = true;
            return;
        }
    });

    /* Decode Safety Equiptment, Body Style, Platform: position 5 */
    let sbpCode = vin[4];
    let tableIndexB = -1;
    if (sbpCode === 'm' && year > 2012){
        sbp = 'V40 Cross Country AWD';
    } else {
        if (year > 1980 && year < 1992) {
            tableIndexB = 0;
        }
        if (year > 1991 && year < 1999) {
            tableIndexB = 1;
        }
        if (year > 1998) {
            tableIndexB = 2;
        }
        sbp = sbpCode in VOLVO.sbpCodes[tableIndexB] ? VOLVO.sbpCodes[tableIndexB][sbpCode] : "";
    }
    
    /* Decode Engine Code: position 6-7 */
    let engCode = vin.substr(5,2);
    console.log(engCode)
    eng = engCode in VOLVO.engineCodes ? VOLVO.engineCodes[engCode] : "";

    /* Decode Body Style, Emissions Code: position 8 */
    let beCode = vin[7];
    let tableIndexC = -1;
    if(year > 1980 && year < 1992) {
        tableIndexC = 0;
    }
    if(year > 1991){
        tableIndexC = 1;
    }
    be = beCode in VOLVO.beCodes[tableIndexC] ? VOLVO.beCodes[tableIndexC][beCode] : "";

    if(['united states', 'canada'].includes(country.toLowerCase())){
        if(series['799']){
            gearbox = VOLVO.gearboxCodes[0][vin[8]];
        }
        if(series['8678']){
            gearbox = VOLVO.gearboxCodes[1][vin[8]];
        }
    }

    plant = vin[10] in VOLVO.plantCodes ? VOLVO.plantCodes[vin[10]] : "";

    return {
        model,
        sbp,
        be,
        eng,
        gearbox,
        plant
    }
};