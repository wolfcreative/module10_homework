let ourNumber = +prompt('Введите число');

if (typeof ourNumber == 'number' && !isNaN(ourNumber) && ourNumber){
  // последнее - проверка на существование значения
  
  if (ourNumber % 2 == 0){
    console.log('чётное')
  } else {
    console.log('нечётное')
  }
} else {
  console.log('Упс, кажется, вы ошиблись')
}