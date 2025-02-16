document.addEventListener("DOMContentLoaded", function () {
    const mainnav = document.querySelector('.navigation');
    const button = document.querySelector('#menu');

    if (!button) {
        console.error("Button with id 'menu' not found! Check your HTML.");
        return;
    }

    button.addEventListener('click', () => {
        mainnav.classList.toggle('show');
        button.classList.toggle('show');
    });
});