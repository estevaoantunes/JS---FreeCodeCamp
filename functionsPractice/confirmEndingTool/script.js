function confirmEnding(str, target){

return str.slice(-target.length) === target;

}

console.log(confirmEnding("Bastian", "n"));

const developer = "Jessica";

function greet() {
  console.log("Hello, " + developer)
}

greet()