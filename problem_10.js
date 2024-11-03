/**
 * Summation of Primes
 * The Sum of the primes below 10 is 2 + 3 + 5 + 7 = 17
 * Find the sum of all the primes below two million.
 */


// function to check for prime numbers.

console.log("Working");

let primes = [2, 3, 5, 7];

// Start loop with 10 because we already have the first 4 primes

function isPrime(num, primes) {
    //check num with list of primes array.

    // could have used a while loop - get used to scrutinizing the code.
    for (let i = 0; i < primes.length; i++) {
        if (num % primes[i] === 0) {
            return false;
        }
    }
    primes.push(num);
    
}
// loop from 11 to 2 million. By 2 because all even numbers are not prime.
for (let i = 11; i < 2000000; i+=2) {
    let prime = isPrime(i, primes);
}   

// console.log(`primes: ${primes}`);

let sum = 0; // sum of all primes, including the initial primes under 10.
for (let i = 0; i < primes.length; i++) {
    sum += primes[i];
}
console.log(`length of primes: ${primes.length}`);
console.log(`Sum of all primes under 2 million is: ${sum}`);

// and the correct answer is.....142913828922 this worked.