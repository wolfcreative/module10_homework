let arr = [4, 8, null, 16, 23, 'IDDQD', 42];
let even = 0;
let odd = 0;
let zero = 0;

for (let i = 0; i <= arr.length; i++) {
  if (typeof arr[i] == 'number' && !isNaN(arr[i])){
    if (arr[i] === 0) {
      zero++;
    } else if (arr[i] % 2 == 0){
      even++;
    } else {
      odd++;
    }
  }
}

console.log(`Чётных чисел: ${even}`);
console.log(`Нечётных чисел: ${odd}`);
console.log(`Нулей: ${zero}`);

// Вы не совсем правильно поняли задание :) нулевые элементы - имелись в виду 0 (т.к. 0 не является ни четным, ни нечетным числом). Поэтому их нужно считать отдельно. Выше исправила.