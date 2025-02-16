/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

for (let i = 1; i <= 100; i++) {
    if (i % 1 === 0) {
        console.log(`First square number found: ${i}, exiting loop.`);
        break;
    }
    console.log(i);
}

// let i = 1;

// while (i <= 100) {
//     if (Math.sqrt(i) % 1 === 0) {
//         console.log(`First square number found: ${i}, exiting loop.`);
//         break;
//     }
//     console.log(i);
//     i++;
// }