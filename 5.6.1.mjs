
let account = 1000; // 20 feb 2022
let dobanda = 8;

const date1 = new Date(2022, 1, 20);
const date2 = new Date(2022, 10, 10);
const diffMilisec = date2.getTime() - date1.getTime();
const difZile = diffMilisec / 1000 / 60 / 60 / 24;

const leap = new Date(date2.getFullYear(), 1, 29).getDate() === 29;
const zileInAn = leap ? 366 : 365;

const dobandaDifZile = (dobanda * difZile) / zileInAn;
console.log('Dobanda exacta pentru ' + difZile + ' zile = ' + dobandaDifZile);
const ordinary = account + (dobandaDifZile / 100 * account);
console.log('Ordinary interest = ' + ordinary);

const bankersRule = account * dobandaDifZile * difZile;
console.log('Bankers rule = ' + bankersRule);

// 365 ..... 8
// 263 (difZile) ..... ?