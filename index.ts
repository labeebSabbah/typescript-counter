// Import stylesheets
import './style.css';

// Write TypeScript code!
const appNav: HTMLElement = document.getElementById('nav');
appNav.innerHTML = `<h1>TypeScript Counter</h1>`;

let counter = -1;
const appCounter: HTMLElement = document.getElementById('count');
count();

const appButton: HTMLElement = document.getElementById('counter');

appButton.addEventListener('click', () => {
  count();
});

function count() {
  counter++;
  appCounter.innerHTML = `${counter}`;
}
