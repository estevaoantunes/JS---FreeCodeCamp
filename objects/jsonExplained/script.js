/*import data from "./example.json" with {type: "json"};

console.log(data["isStudent"]);*/

const user = {
    name: "John",
    age: 30,
    isAdmin: true
};

const jsonString = JSON.stringify(user);
console.log(jsonString);

//Se voce quiser passar pra valores especificos, você pode usar o segundo parâmetro. Exemplo:

const developerObj = {
    firstName: "Jessica",
    isAwesome: true,
    isMusician: true,
    country: "USA",
}

console.log(JSON.stringify(developerObj, ["firstName", "country"]));

//Outro parâmetro util é o espaçamento

const lucasObj = {
    firstName: "Lucas",
    isAwesome: true,
    isMusician: false,
    country:"USA",
}

console.log(JSON.stringify(lucasObj, null, 2));

const userObject = JSON.parse(jsonString);

console.log(userObject);