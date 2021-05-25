"use strict";
var a = "steam";
var b = "mates";

function checkWords(word1, word2) {
    //if we split the word and then sort the letters, if they are an anagram then the sorted letters should match
    var x = word1.split("").sort().join("");
    var y = word2.split("").sort().join("");
    if (x === y) {
        //the two words match
        return true;
    } else {
        //the two words do NOT match
        return false;
    }
}

function runCheck() {
    //if checkWords returns true then we know the words are anagrams so we should print a message informing the user that they are anagrams
    if (checkWords(a, b)) {
        console.log(`${a} and ${b} ARE anagrams`);
    } else {
        console.log(`${a} and ${b} are NOT anagrams`);
    }
}

runCheck();

