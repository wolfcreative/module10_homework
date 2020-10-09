let arr = [4, 8, 15, 16, 23, 42];
console.log(`Длина массива: ${arr.length} элементов`);

arr.map(function(item, index) {
  return console.log(`Значение элемента с индексом ${index}: ${item}`)
});