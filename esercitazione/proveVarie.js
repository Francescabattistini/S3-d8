for (let i = 0; i < 10; i++) {
  console.log(i);
} // ciclerà da 0 a 9

/// questo butta dentro ad un array vuoto degli ogetti
let pera = [
  {
    nome: "Anna",
    surname: "giannini",
    age: 32,
  },
  {
    nome: "giovanna",
    surname: "beduini",
    age: 35,
  },
  {
    nome: "elisabetta",
    surname: "",
    age: 87,
  },
  {
    nome: "garbetti",
    surname: "",
    age: 97,
  },
  {
    nome: "giacomo",
    surname: "luisiani",
    age: 26,
  },
];
let mela = [];

for (let i = 0; i < pera.length; i++) {
  const element = pera[i].nome;
  mela.push(element);
}
console.log(mela);

let arr = "Bilbo, Gandalf, Nazgul, Saruman";
const newarr = arr.split(", ", 2);
console.log(newarr);
//////////////////////////////////////////////////////////////////////////////////////////////////////
// SE CREO UNA VARIABILE CON UN ARRAY VUOTO POSSO CHIAMARE QUELL'ARRAY DENTRO E FUOI IL FOR PERCHE' GLI HO DATO UN VALORE USANDO PUSH
const users = [
  { name: "Jhon", age: 25 },
  { name: "Jack", age: 20 },
];

const age = [];

for (let i = 0; i < users.length; i++) {
  const utente = users[i].age;
  age.push(utente);
}
console.log(age);
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// MI CHIAMO LA VARIABILE FUORI  GLI ASSEGNO L'INDICE ITERANDO L'USERS E LO RICHIAMO NEL FOR,
//PERCHE' NEL FOR HA UNA VALIDITà FUORI NON HA VALIDITà E SARò UNDEFINED
let utente;

for (let i = 0; i < users.length; i++) {
  utente = users[i];
  console.log(utente.age);
}
console.log(utente.age);
//////////////////////////////////////////////////////////////////////////////////////////////////////////

const a = [1, 2, 3];
console.log(a[6]);
