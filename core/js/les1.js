// 0. используем в программе ES6
'use strict'  

// 1. let создает новую переменную
let obj = 'Hello world';
console.log(obj);

// 2. допускается определение нескольких переменных в одной строке
let age = 34, 
	name = 'Roman', 
	surname = 'Lost';

age = 17; // можно менять значение переменной
const PI = 3.1415567;

console.log(name, surname, age, PI) 

// 3. можно узнать тип данных
console.log(typeof age, typeof name)