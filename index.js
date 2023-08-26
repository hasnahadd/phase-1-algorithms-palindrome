function isPalindrome(word) {
  // Write your algorithm here
  wordLenght = word.length;
 word =word.toLowerCase();
 if(wordLenght === 1){
  return true;
}
for(let i = 0, j = word.length - 1; i < j; i++, j--){

if(word[i] == word[j]) {
  return true;
}
else{

  return false;
}
}

}








/* 
first need to know the word of lenght 1 
secound need two conter i and j to go throught the word i from the begining of the word j from the end and comparing characher in the word 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
