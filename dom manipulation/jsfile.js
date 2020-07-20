
const btn = document.querySelector('button');
btn.addEventListener('click', function (e) 
{

 this.disabled=true;

const content = document.querySelector('#container');

const p = document.createElement('p');
	p.innerHTML = "hey i'am red too";
	p.style.color = 'red';

const h3 = document.createElement('h3');
	h3.textContent="i am blue";
	h3.style.color='blue';

content.appendChild(h3);
content.appendChild(p);

const div = document.createElement('div');
	div.style.cssText='border-color:black; background-color:pink';

const divselector = document.querySelector('div');

const h1 = document.createElement('h1');
	h1.textContent="i am in div";


const p1 = document.createElement('p');
	p1.textContent="me too";

div.appendChild(h1);
div.appendChild(p1);

content.appendChild(div);

});

/*const content = document.querySelector('#container');

const p = document.createElement('p');
	p.innerHTML = "hey i'am red too";
	p.style.color = 'red';

const h3 = document.createElement('h3');
	h3.textContent="i am blue";
	h3.style.color='blue';

content.appendChild(h3);
content.appendChild(p);

const div = document.createElement('div');
	div.style.cssText='border-color:black; background-color:pink';

const divselector = document.querySelector('div');

const h1 = document.createElement('h1');
	h1.textContent="i am in div";


const p1 = document.createElement('p');
	p1.textContent="me too";

div.appendChild(h1);
div.appendChild(p1);

content.appendChild(div);
*/