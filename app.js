"use strict";
let words = require('./words.js');

function checkWords(word1, word2) {
    let x = word1.split("").sort().join("");
    let y = word2.split("").sort().join("");
    if (x == y) {
        // console.log(`${word1} and ${word2} ARE anagrams`);
        return true;
    } else {
        // console.log(`${word1} and ${word2} are NOT anagrams`);
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

let wordsArray = words.words;
let groups = [];
for (let i = 0; i < wordsArray.length; i++) {
    let arr = [];
    arr.push(wordsArray[i])
    for(let q = 0; q < wordsArray.length; q++) {
        if (checkWords(wordsArray[i], wordsArray[q]) && wordsArray[i] != wordsArray[q]) {
            arr.push(wordsArray[q]);
            wordsArray.splice(q, 1);
        }
    }
    if (arr.length > 1) {
        groups.push(arr);
    }
}

console.log(groups);


