function mutation(arr){

let firstWord = arr[0].toLowerCase();
let secondWord = arr[1].toLowerCase();
let match = 0;

for(let char of secondWord){
  if(!firstWord.includes(char)){
   return false;
  }
 
}
  return true;
}

console.log(mutation(["helo", "HEllo"]));