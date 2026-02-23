//For of faz o loop em arrays


let usuarios = ["Leticia", "Marcos", "Raziel", "Fernando"];

for(let nomes of usuarios){
    console.log(nomes);
}

//For in faz o loop em objetos

const users = {
    name: "Rodolfo",
    age:33,
    street: "Rua dos Bobos"
};

for(let key in users){
    console.log(users[key]);
}


