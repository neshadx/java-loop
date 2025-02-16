
/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
let sum = 0;
for (let i = 91; i <= 129; i++) {
    if (i % 2 !== 0) {
        sum = sum + i;
    }
}

console.log("Sum of odd numbers from 91 to 129:", sum);


