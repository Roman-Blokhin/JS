/* Создаем массив

const array = [1, 2, 45, 789]
console.log (array)
console.log (array.length) // длина массива
console.log (array[2]) // по индексу выводим элемент массива
console.log (array[array.length - 1]) //последний элемент массива

array[0] = 'becon' // заменили первый элемент в массиве
console.log (array)
*/

const array = []
const input = document.getElementById ('title')
const createBtn = document.getElementById ('create')
const listElement = document.getElementById ('list')

console.log (array)

// добавляем данные из поля ввода в наш массив
createBtn.onclick = function () {
    const ad = input.value
    array.push (ad)
    console.log (array)
}


    
     