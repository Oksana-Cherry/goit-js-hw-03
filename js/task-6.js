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
  //мой вариант
   let totalPrice = 0;
   for (const product of products) {
     if (prop === product.name) {
       totalPrice += product.price * product.quantity;
     }
   }
   return totalPrice;
};
 //вариант2
  /*  let total = 0;
  for (const arr of array) {
      if ( prop=== arr.name) {
        total += arr.quantity * arr.price;
      }   
  }
  return total;
}*/
//вариант3
 /* let totalPrice = 0;
  for (let i = 0; i < array.length; i += 1) {
    const keys = Object.keys(array[i])
      if (prop === array[i][keys[0]]) {
        totalPrice += array[i][keys[1]] * array[i][keys[2]];
      }
   }
   return totalPrice;
};
 */

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

