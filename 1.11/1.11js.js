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

