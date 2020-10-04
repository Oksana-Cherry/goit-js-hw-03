/*const key = 'person';
const getKey = function () {
  return 'age';
};

// Computed properties
const object = {
  [key]: 'Mango',
  [getKey()]: 2,
};

console.log(object); // {person: 'Mango', age: 2}
const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
};*/
let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};

//Write code under this line\
user.hobby = 'skydiving';
user.premium = false;
user.mood = 'happy';
user['full time']= true;

const keys = Object.keys(user);
// Write code under this line 
for (const key of keys) {
  console.log((user[key]));//выводит только значения
  message += `${key} : ${user[key]}\n`; //в строку с переносом
};
console.log(message); 
/*
'age : 20 
hobby : skydiving 
name : Mango 
premium : false 
mood : happy 
"full time" : true 
' */