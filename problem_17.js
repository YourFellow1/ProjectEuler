/**
 * problem 17: If the numbers 1 to 5 are written out in words: one, two, three,
 * four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
 * 
 * If all the numbers from 1 to 1000 (one thousand) inclusive were written out.
 * 
 * Note: Do not count spaces or hyphens. For example 342 (three hundred and forty-two)
 * contains 23 letters and 115 (one hundred and fifteen) contains 20 letters.
 */

let number = 2000;
let words = numberToWords.toWords(number);

console.log(`words: ${words}`);

letterSum = 0;

function countLetters(words) {
    let delimiters = /[ ,!-;]+/    
    let letters = words.split(delimiters);
    let letterCount = 0;
    for (let i = 0; i < letters.length; i++) {
        letterCount += letters[i].length;
    }
    return letterCount;
}

for (let i = 1; i <= 1000; i++) {
    let words = numberToWords.toWords(i);
    let count = countLetters(words);
    letterSum += count;

    console.log(`${i}: ${words} - ${count}; Sum: ${letterSum}`);

}


// gave me 18541, which is incorrect. Definitely miss a bunch of "and"s.
// thankfully I wrote it to list each word so I could find that issue.
// The library is faulty. BOOOOOOOO to the library. 
/*** Theory time.
 * 1-100 should work. Then multiply that by 10.
 * Then it's a matter of One hundred And. 
 * 
 * OH! just the ands from 100 and . So 900?
*/

let ands = 3 * 99 * 9; 

letterSum += ands;
console.log(`Total: ${letterSum}`);


// Answer = 21124. Correct.

// Cool to learn the delimiter thing. I'll have to remember that.