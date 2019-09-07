// OBJECTS
// object literals - object literal notation
//key-value pairs
//data from db will come in an object format more like blogs object
// const blogs = [
//     {title: 'Matooke Cooking Recipe', likes: 200},
//     {title: 'Why learn Javascript', likes: 300}
// ];
// console.log(blogs);

let user = {
    name: 'justin',
    age: 21,
    email: 'justin@256devstudios.com',
    location: 'Kampala',
    interests: ['cooking', 'music', 'driving'],
    blogs: [
        {title: 'Matooke Cooking Recipe', likes: 200},
        {title: 'Why learn Javascript', likes: 300}
    ],
    login(){
        console.log('user is logged in!');
    },
    logout(){
        console.log('user is logged out');
    },
    logInterests(){
        //console.log(this.interests);
        this.interests.forEach(interest => {
            console.log(interest);
        })
    },
    logBlogs(){
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
};
console.log(user);
console.log(user.email);
// user.age = 22;
// console.log(user.age);

//adding methods - see "login"
user.login();
user.logout();

//this keyword - represents the current context of the code block 
user.logInterests();

user.logBlogs();


//MATH OBJECTS
console.log(Math);
console.log(Math.PI);

const area = 7.58;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// generate random numbers
const random = Math.random();
console.log('random number:', random);
console.log(Math.round(random * 1000));


// primitive and reference types
//primitive - numbers, strings, booleans, null, undefined, symbols **** stored on a stack
//pointers
//reference - all types of objects [object literals, arrays, functions, dates] ***** stored on a heap








