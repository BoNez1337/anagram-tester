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

function sortWord(word) {
    return word.split("").sort().join("");
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

function groupWords(arr, key) {
    let wordToSort;
    let index;
    let alreadySorted = [];
    let groupedWordsArray = [];

    for (let i = 0; i < arr.length; i++) {
        wordToSort = arr[i][key];
        index = alreadySorted.indexOf(wordToSort);
        if (index > -1) {
            groupedWordsArray[index].push(arr[i]);
        } else {
            alreadySorted.push(wordToSort);
            groupedWordsArray.push([arr[i]]);
        }
    }
    return groupedWordsArray.filter(v => v.length > 1);
}

let wordsArray = words.words;
let groups = [];
for (let i = 0; i < wordsArray.length; i++) {
    groups.push({ original: wordsArray[i], anagram: sortWord(wordsArray[i]) });
}

console.log(groupWords(groups, 'anagram'));
