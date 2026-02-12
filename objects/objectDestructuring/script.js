const person = {name: "Alice", age: 30, city: "New York"};

console.log(name);
console.log(age);

let {name: personName, age: personAge} = person;

let { name, age, country = "Unknown"} = person;

console.log(country);

const recipe = {
    name: "Chocolate Cake",
    ingredients: {
        flour: "2 cups",
        sugar: "1 cup"
    }
};

const {ingredients: {flour}} = recipe;

console.log(flour);