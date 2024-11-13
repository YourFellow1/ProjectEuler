/**
 * Problem 21: Amicable Numbers
 * 
 * Sum of the proper divisors of 220 is 284. (d(220) = 284)
 * and the sum of proper divisors of 284 is 220. (d(284) = 220)
 * therefore they are amicable.
 * 
 * Find sum of all amicable numbers under 10000.
 * 
 * a and b cannot be the same. d(a) = b and d(b) = a.
 */

// loop through all numbers under 10000.
// and check if amicable.

function getDivisors(num) {
    let divisors = [];
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

function sumDivisors(divisors) {
    let sum = 0;
    for (let i = 0; i < divisors.length; i++) {
        sum += divisors[i];
    }
    return sum;
}

let amicableSum = 0;

for (let i = 0; i < 10000; i++) {
    let divisors = getDivisors(i);
    let sum = sumDivisors(divisors);
    let divisors2 = getDivisors(sum);
    let sum2 = sumDivisors(divisors2);

    if (sum2 === i && sum !== i) {
        amicableSum += i;
    }
}
console.log(`Sum: ${amicableSum}`);

// Answer = 31626. Correct. Well done getting all the factors!