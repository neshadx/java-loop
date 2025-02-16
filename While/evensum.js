/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/

let i = 206;
let sum  = 0;

while (i <= 311) {
    if (i % 2 === 0) {
        sum = sum + i;
    }
    i++;
}
console.log("Final sum of even numbers from 206 to 311:", sum);