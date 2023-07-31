let num = 42 // используем let для определения переменной
let firstName = 'Roman'
const isProgrammer = true

num = 10 // если переменная есть, то заново let мы не пишем

// alert (firstName) // агрессивный способ вывести информацию на экран

console.log ("Test:", firstName) // выводит информацию в консоль

// создаем константу, которая подтягивает значение по id из файла html
const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1') // первое число
const input2 = document.getElementById('input2') // второе число
const sum = Number(input1.value) + Number(input2.value) // константа суммы + изменение тепа на числовой
resultElement.textContent = sum // вывод результата на экране
console.log(resultElement.textContent) // вывод результата в консоли