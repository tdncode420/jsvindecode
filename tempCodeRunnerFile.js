function calculateVINCheckDigit(vin) {
    function isLetter(character) {
        return /^[a-zA-Z]$/.test(character);
    }
    let num_vin = [];
    let products = [];
    let sum = 0;
    const chars = '0123456789X';
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

function validateVINCheckDigit(vin) {
    let check_digit = calculateVINCheckDigit(vin);
    return check_digit === vin[8];
}

// Example usage
const vin = 'YV1RH527552446951';
const checkDigit = calculateVINCheckDigit(vin);
console.log('Check Digit:', checkDigit);
