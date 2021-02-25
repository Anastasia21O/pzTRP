function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

/*
//1
function second(total){
    return total % 60;
}
let a = prompt("a");
console.log(second(a));
 */

/*
//2
function perimetr(side, count){
    return side * count;
}
let a = prompt("side");
let b = prompt("count");
console.log(perimetr(a, b));
 */

/*
//3
function output(n){
    for(let a = 1; a <= n; a++){
        if(a % 3 === 0 && a % 5 === 0){
            console.log("fizzbuzz");
        }
        else if(a % 3 === 0){
            console.log("fizz");
        }
        else if(a % 5 === 0){
            console.log("buzz");
        }
        else {
            console.log(a);
        }
    }
}
let a = prompt("n");
console.log(output(a));
 */

/*
//4
function Calculate(a, b, c){
    return (a * 1 + b * 1 + c * 1) / 3;
}
let a = prompt("1");
let b = prompt("2");
let c = prompt("3");
console.log(Calculate(a, b, c));
 */

