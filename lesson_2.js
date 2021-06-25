// ЗАДАНИЕ 1

    // // ПРИМЕР 1

    let a = 1, b = 1, c, d;
    c = ++a;
    alert(c); // ответ: 2, префиксная форма возвращает новое значение

    // ПРИМЕР 2

    d = b++;
    alert(d); // ответ: 1, постфиксная форма возвращает старое значение 

    // ПРИМЕР 3

    c = 2 + ++a;
    alert(c); // ответ: 5, a до этого стала 2 в 1 примере, а тут опять префиксная форма, и после сложение с 2

    // ПРИМЕР 4

    d = 2 + b++;
    alert(d); // ответ: 4, b до этого стала 2 в 1 примере, а тут опять постфиксная форма, сначал к предыдущему значению прибавили 2, а после увеличили значение на 1

    alert(a); // ответ: 3, префиксная форма в примере 3 сделала из значения 2 значенние 3
    alert(b); // ответ: 3, постфиксная форма в примере 4 сделала из значения 2 значенние 3




// ЗАДАНИЕ 2

let a = 2;
let x = 1 + (a *=2);
// а с помощью *=2 приняла новое значение, тоесть была 2, выражение a*=2, является сокращением a = a * 2
//к новому значению a = 4 прибавили 1, x = 5



// ЗАДАНИЕ 3

let a = Math.floor(Math.random( ) * (100 - (-100) + 1)) + (-100);
let b = Math.floor(Math.random( ) * (100 - (-100) + 1)) + (-100);

if( a >= 0 && b >= 0) {
    alert(a - b);
} else if(a < 0 && b < 0) {
    alert(a * b);
} else if( Math.sign(a) != Math.sign(b) ) {
    alert(a + b);
}



// ЗАДАНИЕ 4

let a = +prompt("Введите 1 число");
let b = +prompt("Введите 2 число");

function plus(num_1, num_2) {
    return(num_1 + num_2);
}

function minus(num_1, num_2) {
    return(num_1 - num_2);
}

function divide(num_1, num_2) {
    return(num_1 / num_2);
}

function multiply(num_1, num_2) {
    return(num_1 * num_2);
}

alert(a + " + " + b + " = " + plus(a , b));
alert(a + " - " + b + " = " + minus(a , b));
alert(a + " / " + b + " = " + divide(a , b));
alert(a + " * " + b + " = " + multiply(a , b));



// ЗАДАНИЕ 5

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case "сложение":
            alert(arg1 + " + " + arg2 + " = " + plus(arg1, arg2));
            break;
        case "вычитание":
            alert(arg1 + " + " + arg2 + " = " + minus(arg1, arg2));
            break;
        case "деление":
            alert(arg1 + " + " + arg2 + " = " + divide(arg1, arg2));
            break;
        case "умножение":
            alert(arg1 + " + " + arg2 + " = " + multiply(arg1, arg2));
            break;
    }
}

let arg1 = +prompt("Введите 1 число");
let arg2 = +prompt("Введите 2 число");
let operation = prompt("Введите математическую операцию");


mathOperation(arg1, arg2, operation)



// ЗАДАНИЕ 6

let number = +prompt("Введите количество денег, которое хотите положить на счет в банке");

if (number % 10 == 1) {
    alert("Ваша сумма в " + number + " рубль успешно зачислена.");
} else if (number % 10 == 2 || number % 10 == 3 || number % 10 == 4 ) {
    alert("Ваша сумма в " + number + " рубля успешно зачислена.");
} else {
    alert("Ваша сумма в " + number + " рублей успешно зачислена.");
}



