/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */


// let i = 81;
// let sum = 0;
//  while (i <= 131) {
//     if (i % 2 !== 0) {
//         console.log(i);
//         sum = sum + i;
//         console.log("sum:", sum);
//     }
//     i++;
//  }

let i = 81;
let sum  = 0;

while (i <= 131) {
    if (i % 2 !== 0) {
        sum = sum + i;
    }
    i++;
}
console.log("Final sum of odd numbers from 81 to 131:", sum);