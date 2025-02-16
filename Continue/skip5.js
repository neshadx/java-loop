/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

for (let i = 55; i <= 85; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    if (i % 5 === 0) {
        continue; // Skip numbers divisible by 5
    }
    console.log(i); // Print only odd numbers that are not divisible by 5
}

// let i = 55;

// while (i <= 85) {
//     if (i % 2 === 0) {
//         i++;
//         continue; 
//     }
//     if (i % 5 === 0) {
//         i++;
//         continue; 
//     }
//     console.log(i);
//     i++;
// }