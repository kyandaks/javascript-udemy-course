// FUNCTIONS
//fuction declaration
function greet(){
    console.log('hello there!');
}
greet();

// function expression  #preferred
const speak = function(){
    console.log('good day dear');
};
speak();

// parameters and arguments
const talk = function(name, time){
    console.log(`how are you, ${name} this ${time}`);
};
talk('kyanda', 'afternoon');

//returning values
const areaCalc = function(radius){
    area = 3.14 * radius **2;
    return area;
};

//arrow fuction 19:14
//const areaCalc = radius => 3.14 * radius**2;  #works for one parameter & for more parameters, use ()

const a = areaCalc(5);
console.log(a);

//callback - functions based as parameters
//foreach - function that similarily loops / iterates through an array

