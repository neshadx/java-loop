/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

let num = 61;
while (num <= 100) {
    console.log(num);
    if (num % 2 !== 0) {
        console.log("odd number", num);
    }
    num++;
}

