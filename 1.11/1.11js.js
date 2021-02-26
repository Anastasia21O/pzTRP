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

/*
//5
function isDivisible_if (n, x, y){
    let a;
    if(n % x === 0 && n % y === 0){
        a = true;
    }
    else  a =  false;
    return a;
}

function isDivisible_ternarnu (n, x, y){
    return ((n % x === 0 && n % y === 0));
}

function isDivisible (n, x, y){
    return isDivisible_ternarnu (n, x, y);
}
let n = prompt("n");
let x = prompt("x");
let y = prompt("y");
console.log(isDivisible_if(n, x, y));
console.log(isDivisible_ternarnu(n, x, y));
console.log(isDivisible(n, x, y));
 */

/*
//6
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
}

function Zavdanna6(){
    let N = prompt("N = ");
    let a = new Array(N);
    for (let b = 0; b < N; b++){
        a[b] = getRandomInt(0, 101);
    }
    console.log("a: " + a);
    console.log("Max: " + getMaxOfArray(a));
    console.log("Min: " + getMinOfArray(a));
    const sum = a.reduce( (accumulator, currentValue) =>
    {
        return (accumulator + currentValue);
    });
    console.log("Sum: " + sum);
    console.log("Sum/N: " + sum/N);
    const neparni = a.filter( (age) =>{
        return age % 2 !== 0;
    } );
    console.log("Neparni: " + neparni);
}
Zavdanna6();
 */

/*
//7
function Zavdanna7() {
    const a = Array.from(Array(5), () => new Array(5));
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            a[i][j] = getRandomInt(-100, 101);
            if (i === j) {
                a[i][j] = (a[i][j] >= 0) ? 1 : 0;
            }
        }
    }
    let str = "";
    for (let x = 0; x < a.length; x++) {
        for (let j = 0; j < a[x].length; j++)
            str += a[j][x] + " ";
        console.log(str);
        str = "";
    }
}
Zavdanna7();
 */

/*
//8
function Add(a, b){
    return a + b;
}

function Sub(a, b){
    return a - b;
}

function Mul(a, b){
    return a * b;
}

function Div(a, b){
    let z;
    try {
        if (a / b === Infinity){
            throw new Error("");
        }
        else console.log("Div: " + a / b);

    } catch (error) {
        console.log(error.name + ": Нуль!" + error.message);
    }
}
let a = prompt("a") * 1;
let b = prompt("b") * 1;
console.log("Add: " + Add(a, b));
console.log("Sub: " + Sub(a, b));
console.log("Mul: " + Mul(a, b));
Div(a, b);
 */

/*
//9
function Zavdanna9(a){
    let flag = true;
    if (a < 0){
        console.log("Nehatuvne");
        flag = false;
    }
    else console.log("Pozutuvne");

    let flag2 = true;
    if(flag){
        for (let i = 2; i < a; i++){
            if (a % i === 0) flag2 = false;
        }
    }
    else {
        for (let i = -2; i > a; i--){
            if (a % i === 0) flag2 = false;
        }
    }

    if (flag2) console.log("Proste");
    else console.log("Ne Proste");

    if(a % 2 === 0) console.log("Dilutca na 2");
    if(a % 5 === 0) console.log("Dilutca na 5");
    if(a % 3 === 0) console.log("Dilutca na 3");
    if(a % 6 === 0) console.log("Dilutca na 6");
    if(a % 9 === 0) console.log("Dilutca na 9");
}
let a = prompt("a");
Zavdanna9(a);
 */

/*
//10
function Zavdanna10(a){
    let reversed = a.reverse();
    reversed = reversed.map(number => {
        if(Number.isInteger(number)) return number * number;
        else return number;
    });
    return reversed;
}
let a = Zavdanna10([1, 2, "f", 4, 5, 6]);
a.forEach(b => console.log(b));
 */
