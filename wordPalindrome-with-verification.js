'use strict';

var instruction = prompt("Write a word: ");

if(instruction == ''){
  console.log("Please write a word");
}else{
  console.log("Your word is "+instruction+"\nIs your word a palindrome? "+ palindrome(instruction));
}

function palindrome(word){
  let reverse = word .split('') .reverse() .join('') ;
  return reverse === word;
}
