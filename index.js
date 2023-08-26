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
  Add your pseudocode here
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
