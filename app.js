"use strict";
let words = require('./words.js');

function checkWords(word1, word2) {
    let x = word1.split("").sort().join("");
    let y = word2.split("").sort().join("");
    if (x == y) {
        console.log(`${word1} and ${word2} ARE anagrams`);
        return true;
    } else {
        console.log(`${word1} and ${word2} are NOT anagrams`);
        return false;
    }
}

function changeLetter(a) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let wordArray = a.split("");
    let newLetter;
    let oldLetter;

    do {
        newLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        oldLetter = wordArray[Math.floor(Math.random() * wordArray.length)];
    } while (oldLetter == newLetter);

    wordArray[wordArray.indexOf(oldLetter)] = newLetter;

    return wordArray.join("");
}

function createAnagram(a) {
    let wordArray = a.split("");
    let anagram = [];

    do {
        anagram.push(wordArray.splice(Math.floor(Math.random() * wordArray.length), 1));
    } while (wordArray.length > 0);

    return anagram.join("");
}

let word = words.words[Math.floor(Math.random() * words.words.length)];
let wordAnagram = createAnagram(word);
if (checkWords(word, wordAnagram)) {
    let changedLetter = changeLetter(wordAnagram);
    checkWords(word, changedLetter);
}

