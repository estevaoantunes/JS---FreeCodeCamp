function repeatStringNumTimes(str, num){
    let emptyArray = [];
    let emptyString = "";

    if(num < 0 || num == 0){
    return emptyString;
   }

   for(let i = 0; i < num; i++){
      emptyArray[i] = str;  
   }
   let arrayStrings = emptyArray.join(" ");
   let arrayStringNoSpaces = arrayStrings.trim().replaceAll(" ", "");

   return arrayStringNoSpaces;

   
}

console.log(repeatStringNumTimes("*", 3));
console.log(repeatStringNumTimes("*", 8));
console.log(repeatStringNumTimes("abc", 3));
