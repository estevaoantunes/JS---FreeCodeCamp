function fearNotLetter(str){
  const firstCode = str.charCodeAt(0);

  for(let i = 0; i < str.length; i++){
    const currentCode = str.charCodeAt(i);

    if(currentCode !== firstCode + i){
      return String.fromCharCode(currentCode - 1);
    }
  }

  return undefined;
}

