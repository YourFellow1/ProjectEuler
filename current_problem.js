/**
 * 2520 is the smallest number that can be divided by each of the numbers
 * from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

// loop through multiples of 20 until they're divisible by 19.
// then take that number and double it until it's divisible by 18.

function byNextNum(num, nextNum) {
    for (let i = num; i < 10000000000; i += num) {
        if (i % nextNum === 0) {
            console.log(`product = ${i} and is divisible by ${nextNum}`);
            return i;
        }
    }
}

let num = 20;

for (let i = 20; i > 1; i--) {
    num = byNextNum(num, i);
    console.log(`num is ${num}`);
}


// UMM.... it worked. answer is 232792560.
