// const prompt = require("prompt-sync")();

// Q1: Write a function called roundDown, that takes any float number and always rounds it down.

// Example:
// roundDown(3.8) will return 3
// roundDown(5.2) will return 5

const roundDown = (x) => Math.floor(x);
console.log(roundDown(3.8));

// Q2: Write a function called slugify that slugifies a string, replace all spaces with - by default or with a certain symbol if the user choses to.

// e.g.
// slugify("I NEed coFfee", &) => i&need&coffee
// slugify("i need sleep")=>i-need-sleep

function slugify(Text, X) {
  return Text.toLowerCase()
    .replace(/ /g, X)
    .replace(/[^\w-]+/g, X);
}
console.log(slugify("I NEed coFfee", "&"));
console.log(slugify("i need sleep", "-"));

// Q3: Make a function that generates an ID thats its length is decided by the user
// e.g.
// generateId(4)=>3567
// generateId(1)=>1

const generateId = (x) => {
  return Math.floor(Math.random() * Math.pow(10, x) + 1);
};
console.log(generateId(5));
console.log(generateId(4));
console.log(generateId(3));
console.log(generateId(2));
console.log(generateId(1));

// Q4: Write a function the calculates the number of occurrence of each letter in a string as an object

// Example
// lettersOccurence("hello")
// Should return
// {
//    h: 1,
//    e: 1,
//    l: 2,
//    o: 1
// }

function lettersOccurence(string) {
  let string1 = string.split("").join("");
  let counter = 1;
  for (let i = 0; i < string.length; i++) {
    if (string1[i] == string1[i + 1]) {
      counter++;
    } else {
      console.log(string1[i] + " " + counter);
      counter = 1;
    }
  }
}
lettersOccurence("hello");
lettersOccurence("heeeeeeeeeeeeeellllllloooooooooooo");

// Q5: Given a DNA strand, return its RNA complement (per RNA transcription).
// Both DNA and RNA strands are a sequence of nucleotides.
// The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).
// The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).
// Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:
//     G -> C
//     C -> G
//     T -> A
//     A -> U
// BONUS: DO NOT USE if OR switch STATEMENTS

// Example:
// toRna('C') returns 'G'
// toRna('ACGTGGTCTTAA') returns 'UGCACCAGAAUU'

const toRna = function (dna) {
  const parseDna = dna.split("");
  let rna = "";
  for (let i = 0; i < parseDna.length; i++) {
    if (parseDna[i] === "G") {
      rna += "C";
    } else if (parseDna[i] === "C") {
      rna += "G";
    } else if (parseDna[i] === "T") {
      rna += "A";
    } else if (parseDna[i] === "A") {
      rna += "U";
    } else {
      throw new Error("Invalid input DNA.");
      // This part doesn't work for some reason.
    }
  }
  return rna;
};

console.log(toRna("ACGTGGTCTTAA"));
// console.log("UGCACCAGAAUU");
// console.log(toRna("C"));

// Q6:
// Given a word, compute the scrabble score for that word.
// Letter Values
// You’ll need these:
// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10

// Examples
// “cabbage” should be scored as worth 14 points:
// - 3 points for C
// - 1 point for A, twice
// - 3 points for B, twice
// - 2 points for G
// - 1 point for E
// And to total:

// 3 + 21 + 23 + 2 + 1
// = 3 + 2 + 6 + 3
// = 5 + 9
// = 14

// score('a') returns 1
// score('A') returns 1
// score('street') returns 6
// score('abcdefghijklmnopqrstuvwxyz') retuens 87

// var word = prompt("Enter a word please");
// word = word.toUpperCase();
const scoree = (word) => {
  var alphabet = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10,
  };

  var letter,
    i,
    sum = 0;
  word = word.toUpperCase();
  for (i = 0; i < word.length; i++) {
    letter = word[i];
    sum += alphabet[letter];
  }
  return sum;
};
// alert(sum);
console.log(scoree("abcdefghijklmnopqrstuvwxyz"));
