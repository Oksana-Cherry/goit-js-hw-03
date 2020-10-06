function calculateTotalPrice(array, prop) {
  ('use strict');
  // Write code under this line
  //это 5е задание.
  /*  const names = [];
    for (const product of array) {
        if (prop in product) {
      names.push(product[prop]);
    }
  }
 return names;
}*/
  let totalPrice = 0;
  for (const product of products) {
    if (prop === product.name) {
      totalPrice += product.price * product.quantity;
    }
  }
  return totalPrice;
};
// Объекты и ожидаемый результат
const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Радар', price: 1280, quantity: 2 },
    { name: 'Радар', price: 1320, quantity: 1 },
    { name: 'Сканер', price: 2700, quantity: 1 },
    { name: 'Сканер', price: 2500, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 }
]; 

console.log(calculateTotalPrice(products, 'Радар'));  
// 9080

console.log(calculateTotalPrice(products, 'Сканер')); 
// 10200

console.log(calculateTotalPrice(products, 'Захват'));
// 2400

console.log(calculateTotalPrice(products, 'Дроид')); 
// 2800
1. Перебираем массив объектов
2. Сравниваем имя свойства прилетевшее из аргумента с свойствами в массиве
3. Если true - делаем вычисления, умножая цену на кол-во, и запихиваем/плюсуем в ранее созданную переменную
