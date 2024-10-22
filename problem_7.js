/**Problem 7: 10001st prime
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
 * we can see that the 6th prime is 13.
 * 
 * What is the 10 001st prime number?
 */

let prime = [2,3,5,7,11,13];
let start = 14;
while (prime.length < 10001) {
    isPrime(start, prime);
    ++start;
}


function isPrime(num, arr) {
    for (let i = 0; i < arr.length; ++i){
        if (num % arr[i] === 0) {
            return false;
        }
    }
    prime.push(num);
    console.log(`prime[${prime.length}] = ${num}`);
    return true;

}

// Wow. that did it. 104743. Correct. The only issue is that it ran 1 too many times.
// just means it's a good thing the console.log was clear.
// Javascript has proven to be much easier than C.