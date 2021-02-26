/*
//1
let flag = true;
let a;
do{
    a = prompt("Виберіть мову “ua” або “en”?");
    a = a.toLowerCase();
    if (a === "ua" || a === "en") flag = false;
    else alert("Не вірне введення!")
}while (flag)

let flag1 = true;
let b;
do{
    if (a === "ua") b = prompt("Введіть номер дня тижня від 1 до 7?") * 1;
    else b = prompt("Enter the day number of the week (from 1 to 7)?") * 1;
    if (b === 1 || b === 2 || b === 3 || b === 4 || b === 5 || b === 6 || b === 7) flag1 = false;
    else alert("Не вірне введення!")
}while (flag1)

function Language(name, days) {
    this.name = name;
    this.days = days;

    this.getDay = function (number) {
        return this.days[number - 1]
    };
}

let ua = new Language("ua", ["Понеділок", "Вівторок", "Середа", "Четверг", "П'ятниця", "Субота", "Неділя"]);
let en = new Language("en", ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]);

if (a === ua.name) alert(ua.getDay(b));
else alert(en.getDay(b));
 */

/*
//2
function Constr(length, width) {
    this.length = length;
    this.width = width;
    this.ABC = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
    this.number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    this.getPiche = function () {
        let str = "";
        for (let a = 0; a < length + 1; a++){
            str += this.number[a] + " ";
            for (let b = 0; b < width; b++){
                if ((a + b) % 2 === 0) str += "# ";
                else str += "@ ";
            }
            if (a === length){
                str = "  ";
                for (let a = 0; a < width; a++){
                    str += this.ABC[a] + " ";
                }
            }
            console.log(str);
            str = "";
        }
    };
}

let length = 0;
let width = 0;
let flag = true;

do {
    length = prompt("length:") * 1;
    width = prompt("width:") * 1;
    if (length < 10 && length > 0 && width < 10 && width > 0) flag = false;
}while (flag)

let variant = new Constr(length, width);
variant.getPiche();
 */

/*
//3
class Random{
    static nextDouble(low, high){
        return Math.random() * (high - low) + low;
    }

    static nextInt(low, high){
        low = Math.ceil(low);
        high = Math.floor(high);
        return Math.floor(Math.random() * (high - low)) + low;
    }

    static nextElement(array){
        let a = Random.nextInt(0, array.length);
        return array[a];
    }
}

let low = prompt("low:") * 1;
let high = prompt("high:") * 1;
let array_length = prompt("array.length") * 1;
let mass = new Array(array_length);

for (let a = 0; a < mass.length; a++){
    mass[a] = Random.nextInt(low, high);
}

console.log("mass: " + mass);
console.log("nextDouble: " + Random.nextDouble(low, high));
console.log("nextInt: " + Random.nextInt(low, high));
console.log("nextElement: " + Random.nextElement(mass));
 */

