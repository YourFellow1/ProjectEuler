/**
 * working on problem 6: Sum Square Difference
 * 
 * The sum of the squares of the first ten natural numbers is, 385.
 * The square of the sum of the first ten natural numbers is, 3025.
 * Hence the difference is 2640 (3025 - 385).
 * 
 * Find the difference btween the sum of the squares of the first one hundred natural numbers and the square of the sum.
 * 
 */


// get square of sum
squareOfSum = 0;
SumOfSquares = 0;

for (let i = 1; i <= 100; i++) {
    squareOfSum += i;
    SumOfSquares += i * i;
    console.log(`i = ${i}, squareOfSum = ${squareOfSum}, SumOfSquares = ${SumOfSquares}`);
}

// subtracty.
squareOfSum *= squareOfSum;

answer = squareOfSum - SumOfSquares;

console.log(answer); // 25164150. Correct.