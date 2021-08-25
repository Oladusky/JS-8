
// Задание 6.

// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.


var arr1 = [1,7,3,'javascript', 0, 'js'];


function is_different(arr) {
    arr.sort();
    for (var i=1; i<arr.length; i++) {
        if (arr[i] == arr[i-1]) {
            return true;
        }
    }
    return false;
}
console.log(is_different(arr1));




