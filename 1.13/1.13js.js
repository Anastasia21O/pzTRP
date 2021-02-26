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
