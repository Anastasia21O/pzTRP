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

