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
