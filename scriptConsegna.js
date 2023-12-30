//ESERCIZIO 1
console.log("Esercizio 1:");

const checkSum = function(x,y){
    return (x+y === 50 || x === 50 || y === 50) 
}
console.log(checkSum(25,25));

// ESERCIZIO 2
console.log("Esercizio 2:");
const strRemove = function(string,index){
    let primaParte = string.substring(0,index)
    let parteSeconda = string.substring(index+1)
    let res = primaParte + parteSeconda
    return res
}
console.log(strRemove('ciao',1));

// ESERCIZIO 3
console.log("Esercizio 3:");
const checkInterval = function(x,y){
    return ( 40 <= x && x <= 60) || (70 <= x && x <= 100) || (40 <= y && y <= 60) || (70 <= y && y <= 100)
}
console.log(checkInterval(20,30));

// ESERCIZIO 4
console.log("Esercizio 4:");
const checkCity = function(city){
    if (city.startsWith("Los") || city.startsWith("New") ){
        return city
    }
    else{
        return false
    }
}

console.log(checkCity("New pippo"));

// ESERCIZIO 5
console.log("Esercizio 5");
let array_5 = [1,2,5,14]
const sumArray = function(arr){
    let c = 0
    for (let i = 0; i < arr.length; i++) {
         c += arr[i]
    }
    return c
}
console.log(sumArray(array_5));

// ESERCIZIO 6
console.log("Esercizio 6");
let array_6 = [4,3,2,7,10,11,12,2]
const checkArray = function(arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1 || arr[i] === 3) {
            return false
            break;
        }
        else{
            return true
        }
    }
}
console.log(checkArray(array_6));
// ESERCIZIO 7
console.log("Esercizio 7");
const checkAngle = function(angle){
    if (angle < 90) {
        return "acuto"
    }
    else if (angle > 90 && angle < 180) {
        return "ottuso"
    }
    else if (angle === 90) {
        return "retto"
    }
    else if (angle === 180) {
        return "piatto"
    }
}
console.log(checkAngle(180));

// ESERCIZIO 8
console.log("Esercizio 8");
const acronym = function(frase){
        const obj = frase.split(/\s+/);
        let INIT = ''
        for (let i = 0; i < obj.length; i++) {
            INIT += obj[i].charAt(0)
        }
    return INIT.toLocaleUpperCase()
}
console.log(acronym('all cops are bastard'))

//ESERCIZIO 1 EXTRA

console.log("Esercizio 1 EXTRA");

const countLetter = function(frase){
    const occorrenze = {};
    for (let i = 0; i < frase.length; i++) {
        const carattere = frase[i].toLowerCase()
        occorrenze[carattere] = (occorrenze[carattere] || 0) + 1;
    }
    let c = 0

    return occorrenze
}
console.log(countLetter('ciao mamma'));

//ESERCIZIO 2 EXTRA

console.log("Esercizio 2 EXTRA");

const checkAnagram = function (input1,input2) {
    const frase1 = input1.toLowerCase().replace(/\s/g, "");
    const frase2= input2.toLowerCase().replace(/\s/g, "");
    
    console.log((frase1.split('').reverse().join('') === frase2));

}
checkAnagram("i topi non avevAno nipoti","i topi non avevano Nipoti")

//ESERCIZIO 3 EXTRA

console.log("Esercizio 3 EXTRA");

