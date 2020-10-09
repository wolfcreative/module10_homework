let arr = [4, 8, null, 16, 23, 'IDDQD', 42];
let even = 0;
let odd = 0;

for (let i = 1; i <= arr.length; i++) {
  if (typeof arr[i] == 'number' && !isNaN(arr[i])){
    if (arr[i] % 2 == 0){
      even++;
    } else {
      odd++;
    }
  }
}

console.log(`Чётных чисел: ${even}`);
console.log(`Нечётных чисел: ${odd}`);
console.log(`Значение нулевого элемента: ${arr[0]}`);