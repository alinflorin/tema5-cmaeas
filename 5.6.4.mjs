
let account = 0;

let months = 12 * 5;

const dobanzi = [10, 10, 7, 8, 8];
let pozitieDobandaCurenta = 0;

for (let i = 1; i <= months; i++) {
    account = account + 100;

    if (i % 12 === 0) {
        account = account + (dobanzi[pozitieDobandaCurenta] / 100 * account);
        pozitieDobandaCurenta++;
    }
}


// for (let i = 1; i <= months; i++) {
//     account = account + 100;

//     switch (i) {
//         case 12:
//             account = account + (10/100 * account);
//             break;
        
//         case 24:
//             account = account + (10 / 100 * account);
//             break;
        
//         case 36:
//             account = account + (7 / 100 * account);
//             break;
        
//         case 48:
//             account = account + (8 / 100 * account);
//             break;
        
//         case 60:
//             account = account + (8 / 100 * account);
//             break;
//     }
// }

console.log('Account money = ' + account);