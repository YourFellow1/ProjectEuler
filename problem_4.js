/**
 * A palindromic number reads the same both ways.
 * The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */


/// create function to check if number is palindrome

function isPalindrome(num) {
    nam = num.toString();
    for (let i = 0; i < nam.length; i++) {
        if (nam[i] !== nam[nam.length - 1 - i]) {
            return false;
        }
    }
    console.log(nam);
    return true;
}
// let fNum = 999;
// let sNum = 999;

// function getFactor(fNum, sNum) {
//     fNum--;
//     return fNum * sNum;
// }

// while (!isPalindrome(getFactor(fNum, sNum))) {
//     if (fNum === 100) {
//         fNum = 999;
//         sNum--;
//     }
//     fNum--;
// }

// Answer was 580085. BUT it was wrong. I'm guessing I need to fix the way we increment
// through the 3-digit numbers.

let factor = 999;
let product = 0;

while (factor > 100) {

    // run check 100 times on each and increment down.
    for (let i = 0; i < 100; i++) {
        product = factor * (factor - i);
        //console.log(`product is ${product} (${factor} * ${factor - i})`);
        if (isPalindrome(product)) {
            console.log(product);
            console.log(`product is ${product} (${factor} * ${factor - i})`);
            break;
        }
    }
    factor--;
}

// first one is 698896. Incorrect. let's try running it with more than 3 iterations.

// 861168.. with 10 iterations still incorrect. Let's try 100 iterations.

// 993 * 913 = 906609. Correct.