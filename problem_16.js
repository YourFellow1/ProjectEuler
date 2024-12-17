/**
 * Problem 16: Power digit sum
 * 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26
 * what is the sum of the digits of the number 2^1000
 */

// Remember to turn off AI when solving this problem.

// Find the number. Turn to string. loop through each digit and add to the sum.

number = BigInt(2 ** 1000)

console.log(`number: ${number}`)
let sum = 0;

for (let i = 0; i < number.toString().length; i++) {
    sum += parseInt(number.toString()[i])
}

console.log(`sum: ${sum}`) // 1366 and it's correct.