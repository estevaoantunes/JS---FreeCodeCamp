function findLongestWordLength(str){

  let words = str.split(" ");
  let largestWord = "";
  for(let i = 0; i < words.length; i++){
    if(words[i].length > largestWord.length){
        largestWord = words[i];
    }
  }

  return largestWord.length;

}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));