// 0. используем в программе ES6
'use strict'  

// 1. let создает новую переменную
let obj = 'Hello world';
console.log(obj);

// 2. допускается определение нескольких переменных в одной строке
let ages = 34, 
	name = 'Roman', 
	surname = 'Lost';

ages = 17; // можно менять значение переменной
const PI = 3.1415567;

console.log(name, surname, ages, PI) 

// 3. можно узнать тип данных
console.log(typeof ages, typeof name)

// 4. скрипты, которые работают только в браузере
// 4.1 модальное окно - закомментировал, так как может быть только одно всплывающее окно

// alert('Hello my friend/ Do you want to go for a walk?')  

// 4.2 Окно, спрашивающее возраст - закоментировал, так как может быть только одно всплывающее окно

// let age = prompt('How old are you?', 18);
// console.log(age)

// 4.3 окно просит подтвердить или отказать
let isCar = confirm('Do you have a car?')
console.log(isCar)