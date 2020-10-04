const findBestEmployee = function (employees) {
  ('use strict');
  // Write code under this line
  //МОЙ СТРАННЫЙ ВАРИАНТ С ОШИБКАМИ
  /* const values = Object.values(employees); 
  let max = Math.max(...values);
  //for (const key in employees);{
  const bestEmployee = Object.keys(employees);
  for (const keys of bestEmployee) {
    if (bestEmployee === max);
    findBestEmployee === employees;
  }
  return bestEmployee;
};*/
  //Вариант Аркадия.
  /*const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line
  let bestEmployee = '';
  let maxTasks = 0
  const keys = Object.keys(employees);
  for(let i = 0; i < keys.length; i += 1) {
  const key = keys[i];
  const value = employees[key];
    if(value > maxTasks) {
    maxTasks = value
    bestEmployee = key;
    }
  }
  return bestEmployee;
};*/
  let bestEmployee = '';
  const values = Object.values(employees);
  const max = Math.max(...values);
  const bestEmployees = Object.keys(employees);
  for (const key of bestEmployees) {
    if (employees[key] === max) {
      bestEmployee = key;
    }
  }
  return bestEmployee;
};
// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'
