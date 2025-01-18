/*This is to obtain dates and times from the network  */
const today = new Date();

const year = document.querySelector("#currentyear");
year.innerHTML = `${today.getFullYear()}`;

const lastModified = document.lastModified;
const last = document.querySelector("#lastModified")
last.innerHTML = `${lastModified}`;

/*This part works for the navigation part of the page. It will make appear that and desappear as well with a event 'click' */
const mainnav = document.querySelector('.navigation')
const button = document.querySelector('#menu');

button.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	button.classList.toggle('show');
});