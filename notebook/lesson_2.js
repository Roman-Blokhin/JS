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


createBtn.onclick = function () {
    const addArray = input.value
    array.push (addArray) // добавляем данные из поля ввода в наш массив
    console.log (array)

    // добавляет значение в список на экране
    listElement.insertAdjacentHTML ('beforeend', `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${input.value}</span>
    <span>
        <span class="btn btn-small btn-success">&check;</span>
        <span class="btn btn-small btn-danger">&times;</span>
    </span>
    </li>
    `) 
}



    
     