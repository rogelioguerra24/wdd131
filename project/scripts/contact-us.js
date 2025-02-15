/*This part works for the navigation part of the page. It will make appear that and desappear as well with a event 'click' */
const mainnav = document.querySelector('.navigation')
const button = document.querySelector('#menu');

button.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	button.classList.toggle('show');
});