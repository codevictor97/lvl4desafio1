let numberOne = prompt("Digite um número")
let numberTwo = prompt("Agora o segundo número")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let operator = 0


operator = numberOne + numberTwo
alert("Soma: " + operator)
if (operator % 2 == 0) {
    alert("O resultado da soma é par: " + operator)
} else {
    alert("O resultado da soma é impar: " + operator)
}

operator = numberOne - numberTwo
alert("Subtração: " + operator)
if (operator % 2 == 0) {
    alert("O resultado da subtração é par: " + operator)
} else {
    alert("O resultado da subtração é impar: " + operator)
}

operator = numberOne * numberTwo
alert("Multiplicação: " + operator)
if (operator % 2 == 0) {
    alert("O resultado da multiplicação é par: " + operator)
} else {
    alert("O resultado da multiplicação é impar: " + operator)
}

operator = numberOne / numberTwo
alert("Divisão: " + operator)
if (operator % 2 == 0) {
    alert("O resultado da divisão é par: " + operator)
} else {
    alert("O resultado da divisão é impar: " + operator)
}

operator = numberOne % numberTwo
alert("Resto da divisão: " + operator)
if (operator % 2 == 0) {
    alert("O resultado do resto é par: " + operator)
} else {
    alert("O resultado do resto é impar: " + operator)
}

if(numberOne == numberTwo) {
    alert("Os números inseridos são idênticos")
} else {
    alert("Os números inseridos são diferentes")
}