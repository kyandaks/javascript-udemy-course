// ARRAYS
let ninjas = ['kyanda', 'justin', 'chiya'];
console.log(ninjas)
console.log(ninjas[2])

ninjas[2] = 'shone';
console.log(ninjas);

// diff data types can be stored in an array
// array properties and properties
console.log(ninjas.length);

//array methods
//let arrayResult = ninjas.join(',');
//let arrayResult = ninjas.indexOf('kyanda');
//let arrayResult = ninjas.concat(['chiya']);
let arrayResult = ninjas.push('chiya');
arrayResult = ninjas.pop();
console.log(arrayResult);
console.log(ninjas);

//NULL AND UNDEFINED
//undefined case
let age;
console.log(age, age + 3, `the age is ${age}`);

//null case
let year = null;
console.log(year, year + 3, `the year is ${year}`);

//BOOLEANS
//booleans and comparisons
console.log(true, false);

//methods with booleans
let email = 'kyanda@256devstudios.com';
let emailResult = email.includes('@');
console.log(email);
console.log(emailResult);

//comparison operators ==, !==, >, <, <=, =>
//lower case letters are greater than capital letters
let day = 10;
// loose comparison (diff types can still be equal)
console.log(day == 10);
console.log(day == '10');
//strict comparison (diff types cant be equal)
console.log(day === 10);
console.log(day === '10');

//type conversion
let mark = '90';
console.log(typeof mark);
mark = Number(mark);
console.log(mark + 10);
console.log(typeof mark);
