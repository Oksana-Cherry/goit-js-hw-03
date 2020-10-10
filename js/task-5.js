function getAllPropValues(array, prop) {
  ('use strict');
  // Write code under this line
    const names = [];
    for (const product of array) {
        if (prop in product) {
      names.push(product[prop]);
    }
  }
 return names;
}

/*    const names = [];
  for (const product of products) {
      names.push(product.name);
  }
 return names;
};*/
  //for (let i = 0; i < products.length; i += 1) {
   // let array = Object.entries(products[i]);

   // products[i] = array;

    //const index = products[i][0].indexOf(prop);
    //let propValues = [];

   // propValues.push(products[i][0][1]);

   // console.log(propValues);
 // }

  //return propValues;
//};
// Объекты и ожидаемый результат
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Радар', price: 1280, quantity: 2 },
  { name: 'Радар', price: 1320, quantity: 1 },
  { name: 'Сканер', price: 2700, quantity: 1 },
  { name: 'Сканер', price: 2500, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

console.log(getAllPropValues(products, 'name'));
// ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity'));
// [4, 2, 1, 1, 3, 7, 2]

console.log(getAllPropValues(products, 'category'));
//  []
//Сначала перебери массив, внутри перебери объект, найденное свойство добавляй в новый масив его и верни 
