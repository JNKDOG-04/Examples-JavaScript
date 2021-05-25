'use strict';
var reverse = prompt("Write a word or statement") ? "Your word is " + reverse : "\nPlease write a word or statement"
var word = reverse


function palindrome(word) {
  let reverse = word.split('').reverse().join('');
  return reverse === word;
}

console.log("Your word is " + reverse + "\nIs your word a palindrome? " + palindrome(word));