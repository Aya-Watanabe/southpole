// const body = document.body;
const nav = document.getElementById('nav-to-toggle');
const btn = document.getElementById('nav-button');

btn.addEventListener('click', _ => nav.classList.toggle('show'));


// prevent default
btn.addEventListener('mousedown', (e) => { e.preventDefault() });