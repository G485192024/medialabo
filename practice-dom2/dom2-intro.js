function greeting() {
    let l = document.createElement('li'); 
    l.textContent = 'ヨット'; 

    let u = document.querySelector('ul#kazoeuta'); 
    u.insertAdjacentElement('beforeend',l) ;

    let i = document.querySelector('img#bluemoon'); 
    i.setAttribute('src', 'bluemoon.jpg');

    let a = document.createElement('a'); 
    a.textContent = '拓殖大学HP'; 
    a.setAttribute('href', 'https://www.takushoku-u.ac.jp'); 
    let p = document.querySelector('p#takudai'); 
    p.insertAdjacentElement('afterend', a); 

    l = document.querySelector('li#mochi'); 
    l.remove(); 
    u = document.querySelector('ul#kassen'); 
    u.remove(); 

    p = document.querySelector('p#primary'); 
    u = document.createElement('ul'); 
    p.insertAdjacentElement('afterend', u);

    l = document.createElement('li'); 
    u.insertAdjacentElement('beforeend', l); 
    l.textContent = '赤'; 

    l = document.createElement('li'); 
    u.insertAdjacentElement('beforeend', l); 
    l.textContent = '緑'; 

    l = document.createElement('li'); 
    u.insertAdjacentElement('beforeend', l); 
    l.textContent = '青'; 
}
  let b = document.querySelector('button#henkou');
  b.addEventListener('click', greeting);
