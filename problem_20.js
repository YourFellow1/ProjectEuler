/**
 * Problem 20! Factorial Digit sum.
 * 10! = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 3628800
 * sum of the digits = 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27
 * 
 * find the sum of the digits for 100!
 * 
 * OH! I missread the question. I thought it was the sum of the digits of the factorial.
 */

let number = 100n;
for (let i = 99; i > 0; i--) {
    number *= BigInt(i);
    console.log(`Number: ${number}; num: ${i}`);
}

let numberString = number.toString();
let sum = 0;
for (let i = 0; i < numberString.length; i++) {
    sum += parseInt(numberString[i]);
}
console.log(`Sum: ${sum}`);

// Answer that printed was 734. Incorrect.

// that was really cool to learn about BigInt!!! answer this time around was 648.
// I had to put BigInt in the for loop as well. And you can't multiply bigInt by a number..