/**
 * Problem 14: longest Collatz Sequence
 * 
 * The following iterative sequence is defined for the set of positive integers:
 * 
 * n -> n/2 (n is even)
 * n -> 3n + 1 (n is odd)
 * 
 * Using the rule above and starting wtih 13, we generate the following sequence:
 * 13 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
 * 
 * It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
 * Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
 * Which starting number, under one million, produces the longest chain?
 * 
 * Note: once the chain starts the terms are allowed to go above one million.
 * 
 */

// Please stop, Copilot!!

// I'm trying to do this without help from Copilot!

// I'm going to use a brute force approach to solve this problem. <- NOPE.

storedNums = {};
longestChain = [0, 0]; // first number is the number, and second is the length of the chain

// Let's not get fancy, and just brute force this problem.


for (let i = 1; i < 1000000; i++) {
    let chain = 1;
    let num = i;
    while (num !== 1) {
        if (num % 2 === 0) {
            num = num / 2;
        } else {
            num = 3 * num + 1;
        }
        chain++;
    }
    if (chain > longestChain[1]) {
        longestChain = [i, chain];
    }
}
console.log(`The number ${longestChain[0]} produces the longest chain of ${longestChain[1]}`); // 837799