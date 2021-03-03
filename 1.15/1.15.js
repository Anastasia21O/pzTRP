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
