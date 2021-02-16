/*
//1
let a = 1;
let i = 2;
let flag = true;
while (a < 100){
    i = 2;
    while(i < a){
        if(a % i == 0){
            flag = false;
            break;
        }
        i++;
    }
    if(flag) console.log(a)
    flag = true;
    a++;
}
*/
/*
//2
let a = 0;
do {
    if(a == 0){
        console.log(a + " - це нуль");
    }
    else if(a % 2 == 0){
        console.log(a + " - це парне число");
    }
    else{
        console.log(a + " - це непарне число");
    }
    a++;
}while (a <= 10)

*/
/*
//3
for (let i = 0; i < 10; console.log(i++)) { }
 */
/*
//4
let a = prompt("?");
let c = "";
let i = 0;

for (i = 0; i < a; i++){
    for(let j = 0; j <= i; j++){
        c += "*";
    }
    console.log(c);
    c = "";
}

console.log();

c = "";
let b = 1;
for (let i = 0; i < a; i++){
    for (let j = 0; j <= ((a / 2) - i + 1); j++) {
        c += " ";
    }
    for (let j = 0; j < b; j++) {
        c += "*";
    }

    console.log(c);
    c = "";
    b += 2;
}

console.log()
b = 1;

for (i = 0; i < a; i++){
    if (i < a / 2) {
        for (let j = 0; j <= ((a / 2) - i + 1); j++) {
            c += " ";
        }
        for (let j = 0; j < b; j++) {
            c += "*";
        }
        b += 2;
        if(i === parseInt(a / 2)) b -= 2;

    }
    else {
        b -= 2;
        for (let j = 0; j <= ((a / 2) + (i - 3)); j++) {
            c += " ";
        }
        for (let j = 0; j < b; j++) {
            c += "*";
        }
    }
    console.log(c);
    c = "";
}*/
/*
//5
let numb = 10000;
let result = numb;
let counter = 0;
do{
    result = result / 2;
    counter++;
}while (result >= 50)
console.log("result = " + result);
console.log("counter = " + counter);
*/
/*
//6
let a = 0;
do {
    a = prompt("1 <= x <= 12")
}while ((a < 1) || (a > 12))
switch (a) {
    case '12':
    case '1':
    case '2':
        console.log("winter");
        break;
    case '3':
    case '4':
    case '5':
        console.log("spring");
        break;
    case '6':
    case '7':
    case '8':
        console.log("summer");
        break;
    case '9':
    case '10':
    case '11':
        console.log("autumn");
        break;
    default:
        break;
}*/
/*
//7
let a = prompt("temperature");
alert(9 / 5 * a + 32);
*/
/*
//8
let a = 0;
do {
    a = prompt("1 <= x <= 7")
}while ((a < 1) || (a > 7))
switch (a) {
    case '1':
        alert("понеділок");
        break;
    case '2':
        alert("вівторок");
        break;
    case '3':
        alert("середа");
        break;
    case '4':
        alert("четверг");
        break;
    case '5':
        alert("п'ятниця");
        break;
    case '6':
        alert("субота");
        break;
    case '7':
        alert("неділя");
        break;
    default:
        break;
}*/
