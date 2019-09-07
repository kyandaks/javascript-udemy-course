//root node [html]
//element nodes
//text nodes

//querySelector --- GET SINGLE ELEMENT
    // const para = document.querySelector('body > p.error');
    // console.log(para);


//querySelectorAll  ---  GET SAME MULTIPLE ELEMENTS
// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para);
// });

// console.log(paras[0]);

//OTHER WAYS TO QUERY THE DOM
//get element by id
// const title = document.getElementById('page-title');
// console.log(title);


//get element by class name
// const errs = document.getElementsByClassName('.error');
// console.log(errs);


//get elements by their tag name
// const daras = document.getElementsByTagName('p');
// console.log(daras);

// get by class name and tag name return htm collections where you cant use methods like foreach unless you convert them to arrays

//difference btn nodelist and html collection
//queryselector preferred



//ADDING AND CHANGING PAGE CONTENT ---- innerText
//const para = document.querySelector('p');
// console.log(para.innerText);
//para.innerText = 'This has been input via DOM';
//para.innerText += ' & This has been input via DOM';

//CHANGE FOR SEVERAL AT ONCE
// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' & ADDED VIA DOM';
// });


//CHANGING THE HTML ---- innerHTML
const content = document.querySelector('.content');
// console.log(content.innerHTML);
//content.innerHTML = '<h1>this is now a heading</h1>';
//content.innerHTML += '<h1>this is now a heading</h1>';

const people = ['kyanda', 'shafik', 'ken'];
people.forEach(person => {
    content.innerHTML += ` <p>${person}<p> `;
});


//CHANGING ATTRIBUTE TEXT
const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://google.co.ug');
link.innerText = 'Link to Google UG'


//changing css classes
 const title = document.querySelector('h1');
 console.log(title.style);
 title.style.margin = '50px';
 title.style.color = 'crimson';
 //font-size
 title.style.fontSize = '40px';
 //remove style
 title.style.margin = '';


 //using external styles -- adding and removing classes
//  const miniheading = document.querySelector('h4');
//  console.log(miniheading.classList);
//  miniheading.classList.add('error');
//  miniheading.classList.remove('error');
//  miniheading.classList.add('success');


