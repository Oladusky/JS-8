
// Задание 3.

// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

let str = prompt('Введите значение, которое хотите перевернуть');

let result = str.split('').reverse().join('');
console.log(result);