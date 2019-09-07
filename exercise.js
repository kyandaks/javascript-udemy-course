//EXERCISE PRACTICE
const paras = document.querySelectorAll('p');

paras.forEach(p => {
    //check if para has either sucess or error
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }

    if(p.innerText.includes('success')){
        p.classList.add('success');
    }
});


//how to toggle classes
// const title = document.querySelector('.title');

// title.classList.toggle('test');
// title.classList.toggle('test');


//NODE RELATIONS ---- parents, children & siblings
const article = document.querySelector('article');
console.log(article.children);
// conversion of html collection to array
Array.from(article.children).forEach(child => {
    child.classList.add('article-element');
});

const title = document.querySelector('h2');
console.log(title);


