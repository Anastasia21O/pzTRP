/*
//1
let number = {
    one: 0,
    two: 0,
    tree: 0,
    four: 0,
    look: function () {
        console.log("одиниці: " + this.one)
        console.log("десятки: " + this.two)
        console.log("сотні: " + this.tree)
        console.log("тисячі: " + this.four)
    }
}

function One(a){
    if(parseInt(a)){
        if(/.{3}\d$/.test(a)){
            number.four = a[a.search(/.{3}\d$/)];
        }
        if(/.{2}\d$/.test(a)){
            number.tree = a[a.search(/.{2}\d$/)];
        }
        if(/.\d$/.test(a)){
            number.two = a[a.search(/.\d$/)];
        }
        if(/\d$/.test(a)) {
            number.one = a[a.search(/\d$/)];
        }
    }
    else {
        console.log("Not number!")
    }
    return number;
}

let b = One(prompt("a"));
b.look();
 */

/*
//2
function Two(a){
    return a.substr(a.search(/\w*$/i));
}
let a = prompt();
console.log(Two(a));
 */

/*
//3
let a = [1, 2, 'one', 'two', 'three', 2, 4, 5, 4, 7, 8, 7, 3, 6];
function Tree(b){
    b = b.sort();
    let c = [];
    for (let i = 0; i < b.length; i++){
        if (i === b.length - 1 && b[b.length - 1] !== b[b.length - 2]){
            c[c.length] = b[i];
        }
        else if(b[i] !== b[i + 1]){
            c[c.length] = b[i];
        }
    }
    return c.forEach((j) => console.log(j));
}
console.log(Tree(a));
 */

/*
//4
let b = {
    text: "asdf",
    neg: 0,
    pos: 0,
    look: function (){
        console.log("Текст: " + this.text);
        console.log("Приголосні: " + this.neg);
        console.log("Голосні: " + this.pos);
    }
}
function Four(a){
    this.text = a;
    this.negative = ["б", "в", "г", "ґ", "д", "ж", "з", "й", "к", "л", "м", "н", "п", "р", "с", "т", "ф", "х", "ц", "ч", "ш", "щ", "ь"];
    this.positive = ["а", "е", "є", "и", "і", "ї", "о", "у", "ю", "я"];

    this.getpositive_negative = function (){
        b.text = this.text;
        this.text = a.toLowerCase();
        let fin = this.text.split(" ");
        fin.forEach((one) => {
            for (let i = 0; i < this.negative.length; i++){
                if(one[0] === this.negative[i]) b.neg++;
            }
            for (let i = 0; i < this.positive.length; i++){
                if(one[0] === this.positive[i]) b.pos++;
            }
        })
        console.log(b.look());
    }
    return this.getpositive_negative();
}

Four("Деякий текст");
 */

/*
//5
function Fife(a){
    return /^\w+@\w+\.\w+$/.test(a);
}
console.log(Fife("test@test.test"));
 */

/*
//6
function Six(a){
    let b = a.match(/\b\w+\b/g);
    b = b.sort();
    console.log(b);
    let count = 1;
    let flag = true;
    for (let i = 0; i < b.length; i++){
        flag = true;
        for (let j = i + 1; j < b.length; j++){
            if(b[i] === b[j]){
                count++;
            }
            else {
                if(flag) {
                    console.log("Слово: " + b[i] + " зустрічається " + count + " разів/раза")
                    i = j - 1;
                    count = 1;
                    flag = false;
                }
            }
        }
    }
}
Six("1, 2, 'one', 'two', 'three', 2, 4, 5, 4, 7, 8, 7, 3, 6");
 */

/*
//7
let b = new Date();
function Week() {
    this.ua = ["понеділок", "вівторок", "середа", "четверг", "п'ятниця", "субота", "неділя"];
    this.en = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    this.getDay = function (arg) {
        let count = -1;
        for (let i = 0; i < this.en.length; i++){
            if(arg === this.en[i]) count = i;
        }
        return this.ua[count];
    };
}

function Months() {
    this.ua = ["січеня", "лютого", "березеня", "квітеня", "травеня", "червеня", "липеня", "серпеня", "вересеня", "жовтеня", "листопада", "груденя"];
    this.en = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    this.getMonth = function (arg) {
        let count = -1;
        for (let i = 0; i < this.en.length; i++){
            if(arg === this.en[i]) count = i;
        }
        return this.ua[count];
    };
}

function Seven(a){
    let c = a.toString().split(" ");
    let lan = new Week();
    let mon = new Months();
    let rez = c[4] + ", " + lan.getDay(c[0]) + " " + c[2] + " " + mon.getMonth(c[1]) + " " + c[3] + " року";
    console.log(rez);
}
Seven(b);
 */

