function chunkArrayInGroups(arr, size){
  let finalArray = [];

  

  while(arr.length > 0){
      let chunk = arr.splice(0, size);
      finalArray.push(chunk);
      console.log(finalArray);

  }


  return finalArray;

}

chunkArrayInGroups(["a", "b", "c", "d"], 2)