/** Problem 9. Special Pythagorean Triplet
 * 
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 * asquared + bsquared = csquared
 * 
 * for example 3^2 = 4^2 = 5^2 = 9 + 16 = 25
 * 
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 *
 * FIND THE PRODUCT OF ABC!!!
 * 
 */
 

a = 70;
b = 140;
c = 1000;

// Save a list of squares from 3 to 1000. and print array.
squares = [];

for (let i = 3; i <= 1000; i++) {
    squares.push(i * i);
}

console.log(squares); // when 3 - 1000, it's 998 options.
//Need to filter through and find the ones that are a^2 + b^2 = c^2
// what about an algorithm to do periodic checks on the squares array?
// check 4,5, and 998. If gap is too big, then add 50 to 1 and 2.
// if gap is too small, then subtract 10 from 1 and 2.
// Do this for no more than 30 iterations and see where we land?

function addOrSubtract(a, b, c, gap) {
    if (gap > 100) {
        a += 4;
        b += 2;
        c -= 10;
    } else if (gap <= 100) {
        a -= 1;
        b -= 1;
        c += 2;
        closeGapArray = [a, b, c, gap]; //
        gapArray.push(closeGapArray); // <-- ending with an empty array...
    }
    return [a, b, c];
}
gapArray = [];
closeGap = [];
function getGap(a, b, c) {
    num = c*c - (a*a + b*b);
    console.log(`Gap: ${num} (a: ${a}, b: ${b}, c: ${c})`);
    return num;
}

for (let i = 0; i < 1000; i++) {
    let gap = getGap(a, b, c);
    gapArray.push(gap);
    tempArray = addOrSubtract(a, b, c, gap);
    a = tempArray[0];
    b = tempArray[1];
    c = tempArray[2];
}

// closest = gap of 55 (a: 200, b: 375, c: 425) <-ai. a: 275, b: 397, c: 483
// starting with a = 70, b = 140, c = 1000. 60 iterations.

console.log(closeGap);

// taking a break for the day. Spent a good 30 min. on this problem. Will come back to it tomorrow.