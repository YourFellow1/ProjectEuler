/** Problem 3
 * Largest Prime Factor
 * 
 * The prime factors 13195 are 5, 7, 13, and 29.
 * What is the largest prime factor of the number 600851475143?
 * 
 */

// What are the javascript limits on numbers?

const number = 600851475143;

// Start from 3 and work our way up to the square root of the number

function isPrime(num) {
    // Check if number is prime.
    for (let i = 2; i < num/2; i++) {
        if (num % i === 0) {
            return false;
        }
    }
}

console.log("Initiating");

for (let i = 3; i < number / 2; i+=2) {
    if (number % i === 0) {
        console.log(`Found a factor: ${i}`);
        if (isPrime(i)) {
            console.log(`${i} is a prime factor`);
        }
    }
}


console.log("Done");


// 71, 839, 1471, 6857, 59569, 104441, 486847.


/** out of focus time. The browser was PISSED when I tried to run this.
 * 
 * It stopped at 8462696833. 
 * 
 * I will revisit this tomorrow.
 */