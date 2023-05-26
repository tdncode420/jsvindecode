import {getCountry, getManufacturer, getYear} from './helpers.js'
import {decodeFordVin, decodeVolvoVin} from './ext_helpers.js';

const jsvindecode = {
    decode(vin){
        
        if (!(this.validate(vin))) return console.error('Error: Invalid vin');
        vin = vin.toLowerCase();

        /* Get basic info */
        let country = getCountry(vin);
        let manufacturer = getManufacturer(vin)
        let year = getYear(vin)
        let extInfo = "";

        manufacturer = manufacturer.toLowerCase();
        /* Get extended info (if possible) */
        if (manufacturer.includes('volvo')){
            extInfo = decodeVolvoVin(vin, year, country);
        }
        
        if (manufacturer.includes('ford')){
            extInfo = decodeFordVin(vin);
        }

        return {
            country,
            manufacturer,
            year,
            extInfo
        }

    },
    validate(vin){
        return (typeof vin === 'string' && vin.length === 17)
    }
};

console.log(jsvindecode.decode('1FMZU73K95UA03699'))