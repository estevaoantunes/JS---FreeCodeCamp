const person = {
    name: "Alice",
    age: 30
};

console.log(person["name"]);
console.log(person["age"]);

const user = {
    name: "John",
    profile: {
        email: "john@example.com",
        adress:{
            street: "123 Main St",
            city: "Somewhere"
        }
    }
};

console.log(user?.profile?.adress?.street);
console.log(user?.profile?.phone.number);