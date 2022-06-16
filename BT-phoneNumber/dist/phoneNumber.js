"use strict";
let VinaPhone = [];
let Mobile = [];
let Viettel = [];
let tempPhoneNumber = ['03777777', "070999999", '082666666'];
for (let i = 0; i < tempPhoneNumber.length; i++) {
    if (tempPhoneNumber[i].substring(0, 3) == '037' ||
        tempPhoneNumber[i].substring(0, 3) == '038' ||
        tempPhoneNumber[i].substring(0, 3) == '039') {
        Viettel.push(tempPhoneNumber[i]);
    }
    if (tempPhoneNumber[i].substring(0, 3) == '085' ||
        tempPhoneNumber[i].substring(0, 3) == '081' ||
        tempPhoneNumber[i].substring(0, 3) == '082') {
        VinaPhone.push(tempPhoneNumber[i]);
    }
    if (tempPhoneNumber[i].substring(0, 3) == '070' ||
        tempPhoneNumber[i].substring(0, 3) == '079' ||
        tempPhoneNumber[i].substring(0, 3) == '077') {
        Mobile.push(tempPhoneNumber[i]);
    }
}
console.log(`Viettel: ${Viettel}`);
console.log(`Mobile: ${Mobile}`);
console.log(`Vina: ${VinaPhone}`);
