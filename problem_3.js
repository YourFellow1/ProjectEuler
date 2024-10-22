//  /**attempt 2 */

let num = 600851475143;

 // let's try to find the factors of the number first.
 // Then check the highest numbers to see if they are prime.
 // Array? Object?

// const factors = [];

// for (let i = 3; i < number / 2; i+=2) {
//     if (number % i === 0) {
//         factors.push(i);
//     }
// }

// console.log(factors);

// find first ascending factor. Then take the 
// highest number and check if it is prime.

// let num = 13195;

function getFactor(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return num / i;
        }
    }
}

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

while (!isPrime(num)) {
    num = getFactor(num);
    console.log(num);
}

// 8462696833, 10086647, 6857 <- answer correct