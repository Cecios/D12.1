//ESERCIZIO 1
console.log("Esercizio 1:");

const checkSum = function(x,y){
    return (x+y === 50 || x === 50 || y === 50) 
}
console.log(checkSum(25,25));

// ESERCIZIO 2
console.log("Esercizio 2:");
const strRemove = function(){

}

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
let array = [1,2,5,14]
const sumArray = function(arr){
    let c = 0
    for (let i = 0; i < arr.length; i++) {
         c += arr[i]
    }
    return c
}
console.log(sumArray(array));
