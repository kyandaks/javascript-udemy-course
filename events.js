//EVENTS BASICS
const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    //console.log('you clicked me');
    //ADDING THINGS --- another way
    //ul.innerHTML += '<li>something new</li>';
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    //method 1 --- append goes to the bottom
    //ul.append(li);
    //method 2 --- prepend goes to the top
    ul.prepend(li);
})


// event bubbling and delegation
ul.addEventListener('click', e => {
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
})



//NB: Not advisable to add event listener to every li element. Best thing is to add to its parent!

// const items = document.querySelectorAll('li');
// items.forEach(item => {
//     item.addEventListener('click', e => {
        //console.log('item clicked');
        //console.log(e.target);

        //removing elements
//        e.target.remove();
//     })
// });