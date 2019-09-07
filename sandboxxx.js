// CONTROL FLOW ---- LOOPS AND IF

//for loops
// initialization variable i=0, condition i<5, final expression i++
//for(let i=0; i<5; i++){
    //code block executed if condition is true
    //console.log('in loop:', i);
 //}
//console.log('loop finished');

// cycle thru data
const names = ['chiya', 'loerich', 'justin', 'steven'];
for(let i=0; i<names.length; i++){
    //console.log(names[i]);
    let html = `
    <div>${names[i]}</div>`;
    console.log(html);
}

//while loop
let i=0;
while(i<5){
    console.log('in loop', i);
    i++;
}

// ****do while loop

// if statements
const age = 25
if(age>20){
    console.log('you are a mzee!');
}

const ninjas = ['shan', 'sheila', 'nana', 'elzey'];
if (ninjas.length>2){
    console.log("ehhh mulibangi");
}

const password = 'passwordo';

if (password.length>8){
    console.log('password is strong');
}

//else if statements
const pin = '34334';
if (pin.length==4){
    console.log('pin is 4 digits so continue');
}
else if (pin.length>4){
    console.log('pin should be 4 digits not more');
}
else{
    console.log('pin should not be less than 4 digits');
}


// logical operators - OR || and AND && 27.03
const passcode = 'p@ss';
if (passcode.length>=12 && passcode.includes('@')){
    console.log('that passcode is Strong');
}
else if (passcode.length>=8 || passcode.includes('@')){
    console.log('the passcode is long enough');
}
else{
    console.log('passcode is not long enough');
}


// logical NOT (!)


//break and continue
const scores =[50, 25, 0, 100, 30, 20, 10];
for(let i=0; i<scores.length; i++){

    if(scores[i] === 0){
        continue;
    }

    console.log('your score', scores[i]);

    if (scores[i] === 100){
        console.log('u have scored 100');
        break;
    }
}


// switch


