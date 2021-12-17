/*Change style*/
function change_Style() {
    var content1 = document.getElementById('content1');
    var content2 = document.getElementById('content2');
    content1.style["color"] = 'red';
    content2.style["fontSize"] = '20px';
}

/* hide/ show ELM*/
function hideElm() {
    let content3 = document.getElementById('content3');
    content3.style['display'] = 'none';
}
function showElm() {
    let content4 = document.getElementById('content4');
    content4.style['display'] = 'block';
}

/*sum*/
function sum() {
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    num1 = 5;
    num2 = 3;
    var total = document.getElementById("total").innerHTML = num1 + num2;

}

/*Array*/
function showArray() {
    var animals = ["dog", "cat", "bug"];
    var showArray = document.getElementById('show_array').innerHTML = animals;
}

function firstElm() {
    var animals = ["dog", "cat", "bug"];
    var showArray = document.getElementById('first_elm').innerHTML = animals[0];
}

/*Object*/
function info() {
    var person = {
        name: "Thuong",
        age: "22",
        add: "Hai Duong"
    };
    var info = document.getElementById('info').innerHTML = "I am " + person.name + ", " + person.age + " year old, I was born in " + person.add + ".";
}

/* Homework*/
function showResult() {
    var number;
    var arr = new Array();
    for (number = 17; number <= 1000; number++) {
        if ((number % 17 == 0) || (number % 7 == 0)) {
            if (!(number % 5 == 0) && !(number % 3 == 0)) {
                arr.push(number);
                var list = arr.toString();
                var result = document.getElementById('result').innerHTML = list;
                console.log(typeof (list));
            }
        }

    }
}

/*palindrome*/
function checkPalindrome(str) {
    let a;
    for (var i = 0; i < (str.length) / 2; i++) {
        if (str[i] == str[str.length - i - 1]) {
            // return true;
            a = true;
        } else
            a = false;
    }

    return a;
}
console.log(checkPalindrome("asaa"));

/*Christmas Tree*/

function drawTree() {
    var x = document.getElementById("number_row").value;
    for (let i = 0; i < x; i++) {
        for (let j = x - 1; j > i; j--) {
            var result3 = document.getElementById("tree").innerHTML += "&nbsp  &nbsp";
        }
        for (let k = 0; k <= (i * 2); k++) {
            var result3 = document.getElementById("tree").innerHTML += " * ";
        }
        var result3 = document.getElementById("tree").innerHTML += "<br>";
    }
}

/* Push*/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("push").innerHTML = fruits;

function myPush() {
    fruits[fruits.length] = "Kiwi";
    document.getElementById("push").innerHTML = fruits;
}

/*Shift */
function myShift() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.shift();
    document.getElementById("shift2").innerHTML = fruits;
}

/*Slice*/
document.getElementById("slice1").innerHTML = "Original Array:<br>" + fruits;
function mySlice1() {
    fruits.splice(2, 0, "Lemon", "Kiwi");
    document.getElementById("slice1").innerHTML = "fruits.splice(2, 0, 'Lemon', 'Kiwi')";
    document.getElementById("slice2").innerHTML = "New Array:<br>" + fruits;


}
function mySlice2() {
    var removed = fruits.splice(2, 2, "Lemon", "Kiwi");
    document.getElementById("slice4").innerHTML = "fruits.splice(2, 2, 'Lemon', 'Kiwi')";

    document.getElementById("slice3").innerHTML = "New Array:<br>" + fruits;

}

function mySlice3() {
    fruits.splice(0, 1);
    document.getElementById("slice5").innerHTML = fruits;
}

/*Concat */
function myConcat() {
    var myGirls = ["Cecilie", "Lone"];
    var myBoys = ["Emil", "Tobias", "Linus"];
    var myChildren = myGirls.concat(myBoys);
    document.getElementById("concat").innerHTML = myChildren;
}

/*Sort */
function mySort() {
    fruits.sort();
    document.getElementById("sort").innerHTML = fruits;
}

function myReverse() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.reverse();
    document.getElementById("reverse").innerHTML = fruits;
}

function sortReverse() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();
    fruits.reverse();
    document.getElementById("reverse_sort").innerHTML = fruits;
}

/* Numberic sort*/
function increaseNumberic() {
    var points = [40, 100, 1, 5, 25, 10];

    points.sort(function (a, b) { return a - b });
    document.getElementById("increase").innerHTML = points;
}

function decreaseNumberic() {
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function (a, b) { return b - a });
    document.getElementById("decrease").innerHTML = points;
}

/*Clock */

function startTime() {
    var day = new Date();
    var hours = day.getHours();
    var minutes = day.getMinutes();
    var seconds = day.getSeconds();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    document.getElementById('timer').style["color"] = "white";
    document.getElementById('timer').style["text-align"] = "center";
    document.getElementById('timer').style["width"] = "150px";
    document.getElementById('timer').style["background-color"] = "#427bff";
    document.getElementById('timer').innerHTML = hours + ":" + minutes + ": " + seconds;
    var timeOut = setTimeout(startTime, 500);
}

/*Mảng 2 chiều*/
/*Check nam nhuan */
function checkYear() {
    var year = document.getElementById("check_year").value;
    if (isNaN(year)) {
        return alert("Not a number");
    }

    if ((year % 4 === 0) && (year % 100 === 0) && (year % 400 === 0)) {

        return alert(year + " is a leap year");

    } else {
        return alert(year + " is not a leap year");

    }
}