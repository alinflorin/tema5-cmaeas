let account = 1000;

for (let i = 1; i <= 3; i++) {
    account = account + (8 / 100 * account);
}

// 12.....8
// 7 .... x

const dobanda7Luni = 8 * 7 / 12;

account = account + (dobanda7Luni / 100 * account);

console.log('Simple interest = ' + account);


account = 1000;

for (let i = 1; i <= 3; i++) {
    account = account + (8 / 100 * account);
}

// 12.....8
// 7 .... x



const A = 1000 * (
    Math.pow(1 + (0.08/3) , 3 * 3.6) // r = decimal 0.08
);

console.log('Rational compound interest = ' + A);


// A = P * (1+r)^t
const A2 = 1000 * Math.pow((1 + 0.08), 3);
console.log('Commercial compound interest = ' + A2);



// 12 .... 8
// 1 .... x
const dobandaPeLuna = 8 / 12 / 100; 
const perioade = 3 * 12 + 7;
const AMonthly = 1000 * (
    Math.pow(1 + (dobandaPeLuna / perioade), perioade * perioade) // r = decimal 0.08
);

console.log('Rational monthly compound interest = ' + AMonthly);