import Countries from './data/countries.js';
import Indexes from './data/indexes.js';
import Manufacturers from './data/manufacturers.js';
import Years from './data/years.js';
import { transliterations, weights } from './data/vin.js';

export const getCountry = vin => {
    let chars = vin.substr(...Indexes.COUNTRY);
    let country = "";
    Countries.forEach(ctry => {
        if ((ctry.code + "").toLowerCase() === chars) {
            country = ctry.name;
            return
        }
    });
    return country;
};

export const getManufacturer = vin => {
    let chars = vin.substr(...Indexes.MANUFACTURER);
    let manufacturer = "";
    Manufacturers.forEach(manu => {
        if ((manu.code + "").toLowerCase() === chars) {
            manufacturer = manu.name;
            return;
        }
    });
    return manufacturer;
};

export const getYear = vin => {
    let char = vin[Indexes.YEAR];
    if(!(char in Years)) return []
    let cur_year = new Date().getFullYear();
    let pos_years = Years[char]
    if(pos_years[1] > cur_year){
        return [pos_years[0]]
    } else {
        return pos_years
    }
};

export const calculateVINCheckDigit = vin => {
    function isLetter(character) {
        return /^[a-zA-Z]$/.test(character);
    }
    let num_vin = [];
    let products = [];
    let sum = 0;
    for (let i = 0; i < vin.length; i++) {
        if (i === 8){
            num_vin.push(0);
        } else {
            let char = vin[i];
            if(isLetter(char)){
                num_vin.push(transliterations[char.toLowerCase()]);
            } else {
                num_vin.push(char);
            }
        }
    }
    for (let i = 0; i < num_vin.length; i++) {
        if(i === 8){
            products.push(0);
        } else {
            let num = num_vin[i];
            let weight = weights[i];
            products.push(num * weight);
        }
    }
    for (let i = 0; i < products.length; i++) {
        sum += products[i];
    }
    let check_digit = sum % 11;
    if(check_digit === 10){
        check_digit = 'X';
    }
    return check_digit;
};

export const validateVINCheckDigit = vin => {
    let check_digit = calculateVINCheckDigit(vin);
    return check_digit+"" === vin[8]+"";
};

