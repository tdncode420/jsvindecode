function decodeVDS(vds) {
    const vdsInfo = {
        characters: vds,
        BodyStyle: null,
        EngineType: null,
        RestraintSystem: null
    };

    // Decode Body Style
    const bodyStyleCode = vds.charAt(0);
    vdsInfo.BodyStyle = decodeBodyStyle(bodyStyleCode);

    // Decode Engine Type
    const engineTypeCode = vds.charAt(1);
    vdsInfo.EngineType = decodeEngineType(engineTypeCode);

    // Decode Restraint System
    const restraintSystemCode = vds.charAt(2);
    vdsInfo.RestraintSystem = decodeRestraintSystem(restraintSystemCode);

    return vdsInfo;
}

// Example usage
const vds = "ABC123";
const decodedVDS = decodeVDS(vds);
console.log(decodedVDS);

// Example helper functions
function decodeBodyStyle(code) {
    // Implement your own body style decoding logic here
    // Return the decoded body style based on the provided code
    switch (code) {
        case "A":
            return "Sedan";
        case "B":
            return "Coupe";
        case "C":
            return "Convertible";
        // Add more cases for other body style codes
        default:
            return "Unknown";
    }
}

function decodeEngineType(code) {
    // Implement your own engine type decoding logic here
    // Return the decoded engine type based on the provided code
    switch (code) {
        case "1":
            return "Gasoline";
        case "2":
            return "Diesel";
        case "3":
            return "Electric";
        // Add more cases for other engine type codes
        default:
            return "Unknown";
    }
}

function decodeRestraintSystem(code) {
    // Implement your own restraint system decoding logic here
    // Return the decoded restraint system based on the provided code
    switch (code) {
        case "A":
            return "Dual Airbags";
        case "B":
            return "Side Airbags";
        case "C":
            return "Curtain Airbags";
        // Add more cases for other restraint system codes
        default:
            return "Unknown";
    }
}
