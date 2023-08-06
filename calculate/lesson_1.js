// let num = 42 // используем let для определения переменной
// let firstName = 'Roman'
// const isProgrammer = true
// num = 10 // если переменная есть, то заново let мы не пишем
// alert (firstName) // агрессивный способ вывести информацию на экран
//console.log ("Test:", firstName) // выводит информацию в консоль
//console.log(typeof num) // проверяет тип данных

// создаем константы, которые подтягивают значения по id из файла html
const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1') // первое число
const input2 = document.getElementById('input2') // второе число
const submitBtn = document.getElementById('Submit') // кнопка: Выполнить
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplicationBtn = document.getElementById('multiplication')
const divisionBtn = document.getElementById('division')


/* создаем функцию, чтобы использовать повторяющися код в разных функциях
присваиваем значение - res, чтобы функция работала корректно - Вычислить */
function resultt (res) {
    submitBtn.onclick = function () { 
        resultElement.textContent = res 
        console.log(resultElement.textContent)

        // добавляем условие изменения цвета результата
        if (res < 0) {
            resultElement.style.color = 'red'
        } else if (res == 0) {
            resultElement.style.color = 'black'
        } else {
            resultElement.style.color = 'green'
        }
    }
}

/* мы подключили кнопку: Плюс, и вставили функцию для кнопки: Вычислить, 
функции resultt присваиваем значение sum */
plusBtn.onclick = function () {
    const sum = Number(input1.value) + Number(input2.value)
    resultt (sum)
    }

/* мы подключили кнопку: Минус, и вставили функцию для кнопки: Вычислить, 
функции resultt присваиваем значение min */
minusBtn.onclick = function () {
    const min = Number(input1.value) - Number(input2.value)
    resultt (min)
    }

// функция умножения
multiplicationBtn.onclick = function () {
    const multi = Number(input1.value) * Number(input2.value)
    resultt (multi)
    }

// функция деления
divisionBtn.onclick = function () {
    const divi = Number(input1.value) / Number(input2.value)
    resultt (divi)
    }

