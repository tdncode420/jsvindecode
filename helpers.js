import Countries from './data/countries.js';
import Indexes from './data/indexes.js';
import Manufacturers from './data/manufacturers.js';
import Years from './data/years.js';


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
