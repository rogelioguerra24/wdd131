const today = new Date();

const year = document.querySelector("#currentyear");
year.innerHTML = `${today.getFullYear()}`;

const lastModified = document.lastModified;
const last = document.querySelector("#lastModified")
last.innerHTML = `${lastModified}`;

let start = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

function count() {
    start += 1; 
    localStorage.setItem('counter', start);
    return start;
}

console.log(count());