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

for (let i = 2; i <= 1000000; i++) {
    // temp array to make the chain.
    // if the second number is less than starting num, then chain is already calculated.
    // so we push the previous chain and break the loop.
    // if chain is longer than the longest chain, we update the longest chain.
    let num = i;
    while (num !== 1) {
        if (num < i) {
            // get the stored nums and add the chain.

        }
        // Run the Collatz sequence
        if (num % 2 === 0) {
            num = num / 2;
        } else {
            num = 3 * num + 1;
        }
    }
}

// Out of time! moving on to Power Apps!