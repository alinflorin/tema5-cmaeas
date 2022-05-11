let account = 0;


// 1 an
account = account + (1000 + (8 / 100 * 1000));

// 9 luni
const dobandaPe9Luni = (9 * 10) / 12;
account = account +  (800 + (dobandaPe9Luni / 100 * 800));

// 10 luni
const dobandaPe10Luni = (10 * 9) / 12;
account = account + (1200 + (dobandaPe10Luni / 100 * 1200));

console.log('Value: ' + account);

const timeOfInv = 12 + 9 + 10;
console.log('TOI: ' + timeOfInv);

///// 12 .... 8
///// 9 ..... 10
///// 10 ..... 9

const avg = (12 * 8 + 9 * 10 + 10 * 9) / (1000 + 800 + 1200) * 100;
console.log('Annual interest rate percent: ' + avg);