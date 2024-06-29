// Copiare oggetti in nuove allocazioni di memoria con lo spread operator.
const gatto1 = {
    zampe: 4,
    verso: "miao",
    nome: "Tom"
}
const gatto2 = {
    ...gatto1,
    nome: "Stregatto",
    paese: "Delle meraviglie"
}
const gatto3 = {
    ...gatto2,
    skills: ["arrampicata", "graffio", "miagolio"]
}



// Utilizzare parametri con numero non definito in una funzione con le funzioni REST.
function somma(...numeri) {
    let sum = 0;
    for (let i = 0; i < numeri.length; i++) {
        sum += numeri[i]
    }
    return sum;
}
console.log(somma(1, 4, 6, 8));



// Operatore di destrutturazione degli oggetti
let { zampe, verso } = gatto1;
console.log("Il gatto ha " + zampe + " zampe e fa questo verso: " + verso);



// Operatore di destrutturazione degli array
let { skill1, skill2, skill3 } = gatto3.skills;



// Template Literals
const multirow = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis mollitia modi consequatur obcaecati quisquam tempore vitae accusantium, ex quod repellat officiis sunt architecto quasi deserunt nobis sed suscipit dolor! Cum. Lorem ipsum dolor sit amet, consectetur     adipisicing elit. 
Possimus voluptatum nam vero a eveniet optio, quos repellendus error repellat inventore qui atque, officia quod non. Officiis labore nihil pariatur alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eius commodi culpa dolorum laborum tempore, p
ossimus similique quasi ipsam accusa     mus aperiam! Hic reprehenderit non quae numquam! Ducimus odio obcaecati distinctio!`



// Interpolazione di stringhe
const interpolation = `Il gatto ${gatto2.nome} fa questo verso: ${gatto2.verso}.`;



// New Strings Methods
gatto2.nome.startsWith(); //-> inizia con?
gatto2.nome.endsWith(); // -> finisce con?
gatto2.nome.includes(); // -> contiene?



// Update Arrays Methods
// pop()  -> toglie l'ultimo elemento dell'array

// push() -> aggiunge un elemento alla fine dell'array

// shift() -> toglie il primo elemento dell'array

// unshift() -> aggiunge un elemento all'inizio dell'array

// splice() -> crea un nuovo array e modifica l'originale -> (indice dal quale iniziare a eliminare, quanti elementi voglio eliminare, "valore da inserire" , "altro valore da inserire", ...);

// concat() -> concatena 2 o più array

// slice() -> come splice ma non modifica l'array originale -> (indice dal quale iniziare a copiare, a quale indice ti vuoi fermare[escludendolo]);



// Manipulation Arrays Methods
const namesArray = ["Marco", "Manuel", "Giovanni", "Giacomo", "Filomena", "Ursula"];
const numbers = [1, 2, 3, 239, 264, 23279, 296732];

// forEach()
namesArray.forEach((persona, index) => {
    console.log(`Studente ${index}: ${persona}\n`)
}); // -> cicla l'array e crea una funzione che agisce su ogni elemento dell'array. -> (variabile volante, indice).

// map()
const nameNew = namesArray.map((item) => {
    return `Studente ${item}`;
}); // -> cicla l'array e crea una funzione che crea un ulteriore array agendo su ogni elemento dell'array;

// filter()
const majorsNumbers = numbers.filter(item => {
    return item > 20;
});
console.log(majorsNumbers); // -> cicla l'array e filtra in sola lettura quello che c'è al suo interno, eventualmente creando un nuovo array.

// reduce()
const sum = numbers.reduce((sum, item) => {
    sum + item;
// Copiare oggetti in nuove allocazioni di memoria con lo spread operator.
const gatto1 = {
    zampe: 4,
    verso: "miao",
    nome: "Tom"
}
const gatto2 = {
    ...gatto1,
    nome: "Stregatto",
    paese: "Delle meraviglie"
}
const gatto3 = {
    ...gatto2,
    skills: ["arrampicata", "graffio", "miagolio"]
}



// Utilizzare parametri con numero non definito in una funzione con le funzioni REST.
function somma(...numeri) {
    let sum = 0;
    for (let i = 0; i < numeri.length; i++) {
        sum += numeri[i]
    }
    return sum;
}
console.log(somma(1, 4, 6, 8));



// Operatore di destrutturazione degli oggetti
let { zampe, verso } = gatto1;
console.log("Il gatto ha " + zampe + " zampe e fa questo verso: " + verso);



// Operatore di destrutturazione degli array
let { skill1, skill2, skill3 } = gatto3.skills;



// Template Literals
const multirow = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis mollitia modi consequatur obcaecati quisquam tempore vitae accusantium, ex quod repellat officiis sunt architecto quasi deserunt nobis sed suscipit dolor! Cum. Lorem ipsum dolor sit amet, consectetur     adipisicing elit. 
Possimus voluptatum nam vero a eveniet optio, quos repellendus error repellat inventore qui atque, officia quod non. Officiis labore nihil pariatur alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eius commodi culpa dolorum laborum tempore, p
ossimus similique quasi ipsam accusa     mus aperiam! Hic reprehenderit non quae numquam! Ducimus odio obcaecati distinctio!`



// Interpolazione di stringhe
const interpolation = `Il gatto ${gatto2.nome} fa questo verso: ${gatto2.verso}.`;



// New Strings Methods
gatto2.nome.startsWith(); //-> inizia con?
gatto2.nome.endsWith(); // -> finisce con?
gatto2.nome.includes(); // -> contiene?



// Update Arrays Methods


//indexOf () =>  let arr = [1, 0, false]; = ( arr.indexOf(0) ); // 1 | alert( arr.indexOf(null) ); // -1||alert( arr.includes(1) ); // true
// pop()  -> toglie l'ultimo elemento dell'array

// push() -> aggiunge un elemento alla fine dell'array

// shift() -> toglie il primo elemento dell'array

// unshift() -> aggiunge un elemento all'inizio dell'array

// split() --> 1 ) limite lunghezza array . 2) La chiamata a split(s) con l’argomento vuoto, dividerà la stringa in un array di lettere:
 
/* 1)  */let arr = "Bilbo, Gandalf, Nazgul, Saruman";
const newarr = arr.split(", ", 2);
console.log(newarr);
/* 2) La chiamata a split(s) con l’argomento vuoto, dividerà la stringa in un array di lettere:*/ 
let str = "test";

console.log( str.split('') ); // t,e,s,t
// concat() -> concatena 2 o più array (let arr = [1, 2];==> alert( arr.concat([3, 4])); // 1,2,3,4)

// slice() -> come splice ma non modifica l'array originale -> carr.slice([start], [end])(indice dal quale iniziare a copiare, a quale indice ti vuoi fermare[escludendolo]);

// splice() ->  crea un nuovo array e modifica l'originale 

//arr.splice(1, 1);  -> a partire da indice 1 rimuove 1 elemento(Il metodo arr.splice è un coltellino svizzero per array.
 //Può fare qualsiasi cosa: aggiungere e rimuovere elementi, ovunque.) LA SINTASSI E' ==>> arr.splice(start[, deleteCount, elem1, ..., elemN])



// Manipulation Arrays Methods
const namesArray = ["Marco", "Manuel", "Giovanni", "Giacomo", "Filomena", "Ursula"];
const numbers = [1, 2, 3, 239, 264, 23279, 296732];

// forEach()
namesArray.forEach((persona, index) => {
    console.log(`Studente ${index}: ${persona}\n`)
}); // -> cicla l'array e crea una funzione che agisce su ogni elemento dell'array. -> (variabile volante, indice).

// map()
const nameNew = namesArray.map((item) => {
    return `Studente ${item}`;
}); // -> cicla l'array e crea una funzione che crea un ulteriore array agendo su ogni elemento dell'array;

// filter()
const majorsNumbers = numbers.filter(item => {
    return item > 20;
});
console.log(majorsNumbers); // -> cicla l'array e filtra in sola lettura quello che c'è al suo interno, eventualmente creando un nuovo array.

// reduce()
const sum = numbers.reduce((sum, item) => {
    sum + item;
... (19 righe a disposizione) (19 righe a disposizione)