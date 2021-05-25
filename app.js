"use strict";

function checkWords(word1, word2) {
    let x = word1.split("").sort().join("");
    let y = word2.split("").sort().join("");
    if (x == y) {
        return true;
    } else {
        return false;
    }
}

function runCheck(a, b) {
    if (checkWords(a, b)) {
        console.log(`${a} and ${b} ARE anagrams`);
    } else {
        console.log(`${a} and ${b} are NOT anagrams`);
    }
}

function changeLetter(a) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
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
    let wordLength = wordArray.length;
    let temp;
    let randomIndex;

    while (0 != wordLength) {
        randomIndex = Math.floor(Math.random() * wordLength);
        wordLength -= 1;
        temp = wordArray[wordLength];
        wordArray[wordLength] = wordArray[randomIndex];
        wordArray[randomIndex] = temp;
    }

    return wordArray.join("");
}

runCheck(changeLetter("steam"), createAnagram("mates"));

