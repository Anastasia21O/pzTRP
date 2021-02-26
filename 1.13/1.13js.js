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

/*
//4
function createGreetable (name) {
    this.name = name;
}

createGreetable.prototype.greet = function(greeting) {
    return `${greeting}, ${this.name}!`;
};

const g = new createGreetable('Oleg');
console.log(g)
console.log (g.greet("Hello"));
 */

/*
//5
function sequence(a, b){
    let start = a;
    let krok = b;

    return () => start += krok;
}

let generator = sequence(10, 3);
let generator2 = sequence(7, 1);
console.log(generator());
console.log(generator());
console.log(generator2());
console.log(generator());
console.log(generator2());
 */

/*
//6
function pluck(mass, element){
    let arr = [];
    for (let a = 0; a < mass.length; a++){
        arr[a] = mass[a].name;
    }
    return arr;
}

let characters = [
    {name: "barney", age: 36},
    {name: "fred", age: 40}
];
console.log (pluck(characters, name)); //['barney', 'fred'];
 */

/*
//7
function count(obj){
    return Object.getOwnPropertyNames(obj);
}

let a = { a: 1, b: 2 };
console.log(count(a));
let b = function () {};
console.log(count(b));
let c = [1, 2, 3];
console.log(count(c));
let d = [];
d[100] = 1;
console.log(count(d));
 */

/*
//8
class Task{
    constructor(n, d, day_s, day_f) {
        this.name = n;
        this.description = d;
        this.day_start = day_s;
        this.day_finish = day_f;
        this.subtask = [];
    }
}

class Own_task extends Task{
    constructor(n, d, day_s, day_f, i, fl) {
        super(n, d, day_s, day_f);
        this.interest = i;
        this.flag = fl;
    }

    toStrin(){
        console.log("Ваша задача: " + this.name);
        console.log("Опис задачі: " + this.description);
        console.log("Початок: " + this.day_start);
        console.log("Кінець: " + this.day_finish);
        console.log("Відсоток виконання: " + this.interest + "%");
        this.flag? console.log("Завдання в процесі.") : console.log("Завдання завершене");
    }
}

let a = new Own_task("Випускний", "Святкування випуску", "26.06.2021", "27.06.2021", 87, true);
a.toStrin();
 */

/*
//9
class Worker{
    constructor(n, s, r, d) {
        this.name = n;
        this.surname = s;
        this.rate = r;
        this.days = d;
    }

    getSalary(){
        return this.rate * this.days;
    }

    toStrin(){
        console.log("Ім'я: " + this.name);
        console.log("Прізвище: " + this.surname);
        console.log("Зарплата: " + this.getSalary());
    }
}

let a = new Worker("Петя", "Петляк", 12, 4);
a.toStrin();
 */

/*
//10
let electrical_network = 0;
let profit = 0;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

class Electricity_consumption{
    constructor(e1, e2) {
        this.electricity1 = e1 * 1;
        this.electricity2 = e2 * 1;
    }

    consumption(){
        electrical_network += this.electricity1 + this.electricity2;
    }

    string(){
        let a = "Виготовлення/Споживання електроенергії вдень: " + this.electricity1 +
            "\nВиготовлення/Споживання електроенергії вночі: " + this.electricity2;
        return a;
    }
}

class Power_plant extends Electricity_consumption{
    constructor() {
        super(getRandomInt(1, 101), 0);
    }
}

class Solar_panel extends Electricity_consumption{
    constructor() {
        super(getRandomInt(1, 6), 0);
    }
}

class Residential_building extends Electricity_consumption{
    constructor(count_hourse) {
        super((-1) * count_hourse * 0.004, (-1) * count_hourse * 0.001);
        this.count_hourse = count_hourse;
    }
}

class Power_line{
    constructor() {
        this.power = getRandomInt(1, 21);
        this.the_price_is_megawatts = getRandomInt(30, 41);
        this.power_days = this.power;
    }

    output(){
        if (electrical_network !== 0){
            if (electrical_network < 0){
                if (Math.abs(electrical_network) < this.power_days){
                    profit -= Math.abs(electrical_network) * this.the_price_is_megawatts;
                    this.power_days -= Math.abs(electrical_network);
                    electrical_network = 0;
                }
                else {
                    profit -= this.power_days * this.the_price_is_megawatts;
                    electrical_network += this.power_days;
                    this.power_days = 0;
                }
            }
            else {
                if (electrical_network < this.power_days){
                    profit += electrical_network * this.the_price_is_megawatts;
                    this.power_days -= electrical_network;
                    electrical_network = 0;
                }
                else {
                    profit += this.power_days * this.the_price_is_megawatts;
                    electrical_network -= this.power_days;
                    this.power_days = 0;
                }
            }
        }
    }

    string(){
        let a = "Кількість можливих перевезень МВатт в один день: " + this.power +
        "\nЦіна за один МВатт: " + this.the_price_is_megawatts;
        return a;
    }
}

let days = 10;
let power_plants = [];
let solar_panels = [];
let residential_buildings = [];
let power_lines = [];

function Creater(){
    console.log("Електростанції: {");
    for (let a = 0; a < getRandomInt(1, days); a++){
        power_plants[a] = new Power_plant();
        console.log(power_plants[a].string());
    }
    console.log("}");

    console.log("Сонячні панелі: {");
        for (let a = 0; a < getRandomInt(1, days); a++){
        solar_panels[a] = new Solar_panel();
        console.log(solar_panels[a].string());
    }
    console.log("}");

    console.log("Житлові будинки: {");
    for (let a = 0; a < getRandomInt(1, days); a++){
        residential_buildings[a] = new Residential_building(getRandomInt(1, 401));
        console.log(residential_buildings[a].string());
        console.log("Кількість квартир в будинку: " + residential_buildings[a].count_hourse)
    }
    console.log("}");

    console.log("Лінії електропередач: {");
    for (let a = 0; a < getRandomInt(1, days); a++){
        power_lines[a] = new Power_line();
        console.log(power_lines[a].string());
    }
    console.log("}");
}

function Electrical_network_of_this_days(){
    for (let a = 0; a < power_plants.length; a++){
        power_plants[a].consumption();
    }

    for (let a = 0; a < solar_panels.length; a++){
        solar_panels[a].consumption();
    }

    for (let a = 0; a < residential_buildings.length; a++){
        residential_buildings[a].consumption();
    }
}

function Job(){
    Creater();
    for (let a = 0; a < days; a++){
        Electrical_network_of_this_days();

        for (let b = 0; b < power_lines.length; b++){
            if (electrical_network !== 0){
                power_lines[b].output();
            }
            power_lines[b].power_days = power_lines[b].power;
        }

        console.log("Електрична мережа міста на кінець " + (a + 1) + " дня становить: " + electrical_network);
        console.log("Заробіток міста на кінець " + (a + 1) + " дня становить: " + profit);
    }
}

Job();
 */
