
// Задание 7.

// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.




let arr = [0 ,1, 2, 3, 4, 5, null, "te" , true];

let odd = 0;
let even = 0;
let zero = 0;
let nl = 0;
let text = 0;
let smbl = 0;
let bln = 0;


for (let i = 0; i < arr.length; i++) {
	    if (arr[i] % 2 === 0 ) {
		odd++;
	}   if (arr[i] % 2 !== 0) {
		even++;
    }   if (arr[i] === 0) {
		zero++;
    }   if (arr[i] === null) {
		nl++;
    }   if (typeof arr[i] == "string") {
		text++;
    }   if (typeof arr[i] == "symbol") {
		smbl++;
    }   if (typeof arr[i] == "boolean") {
		bln++;
    } 
  
}

console.log(odd);
console.log(even);
console.log(zero);
console.log(nl);
console.log(text);
console.log(bln);
