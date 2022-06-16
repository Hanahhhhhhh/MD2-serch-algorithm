"use strict";
let VinaPhone = ["085", "081", "082"];
let Mobile = ["070", "079", "077"];
let Viettel = ["037", "038", "039"];
let tempPhoneNumber = ['03777777', "070999999", '082666666'];
function determineMobileCarrier(tempPhoneNumber) {
    for (let i = 0; i < tempPhoneNumber.length; i++) {
        checkingCarrier(tempPhoneNumber[i]);
    }
}
function checkingCarrier(phoneNumber) {
    if (phoneNumber.startsWith(Viettel[0]) ||
        phoneNumber.startsWith(Viettel[1]) ||
        phoneNumber.startsWith(Viettel[2])) {
        console.log("the phone number is Viettel");
    }
    else if (phoneNumber.startsWith(VinaPhone[0]) ||
        phoneNumber.startsWith(VinaPhone[1]) ||
        phoneNumber.startsWith(VinaPhone[2])) {
        console.log("the phone number is VinaPhone");
    }
    else if (phoneNumber.startsWith(Mobile[0]) ||
        phoneNumber.startsWith(Mobile[1]) ||
        phoneNumber.startsWith(Mobile[2])) {
        console.log("the phone number is Mobile");
    }
    else {
        console.log("this phoneNumber is not recognize");
    }
}
determineMobileCarrier(tempPhoneNumber);
