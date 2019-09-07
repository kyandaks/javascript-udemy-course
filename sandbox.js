//alert('sign in');

console.log(1);
console.log('you have been signed in!');

let age = 22;
let year = 2019;
console.log(age, year);

age = 30;
console.log(age);

const points = 300;
//you cant reassign const
console.log(points);

//reserved keywords

//strings
let email = 'kyanda@256devstudios.com'
console.log(email);
console.log(email.length);
//getting position
console.log(email[6]);

//string concatenation
let firstName = 'Justin';
let lastName = 'Derz';
let fullName = firstName + ' ' + lastName;
console.log(fullName);
console.log(fullName.toUpperCase());


//common string methods
let result = email.lastIndexOf('o');
console.log(result);

let brandName = 'ugandaonlinetvs';
//let shortName = brandName.slice(0,7);
//console.log(shortName);
let shortName = brandName.substr(0,12);
console.log(shortName);


// numbers data types
let radius = 10;
let pi = 3.14;
console.log(radius, pi);

//math operations
let area = pi*radius**2;
console.log(area);

//order of operations - BIDMAS / BODMAS

let simpleResult = 10%3;
console.log(simpleResult);
// asignment operators -=, *=, /=
let likes = 10;
//likes++;
//likes--;
likes +=10;
console.log(likes);

//NaN - not a number
console.log(500/'fransica');

// numbers concatenation
let message = 'You have ' + likes + ' likes';
console.log(message);

//template strings or literals
const title = 'Best reads of July 2019';
const author = 'Kyanda';
const views = '3000';

//concatenation way
let post = 'the blog called ' + title + ' by ' + author + ' has ' + views + ' page views';
console.log(post);

//template strings way
let blogpost = `the blog called ${title} by ${author} has ${views} page views`;
console.log(blogpost);

//casestudy: html templates
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${views} views</span>`;
console.log(html);

