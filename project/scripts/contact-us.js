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

    const form = document.querySelector('#contactForm');
    if (!form) {
        console.error("Form with id 'contactForm' not found! Check your HTML.");
        return;
    }

    const input_name = document.querySelector('#name');
    const input_lname = document.querySelector('#lname');
    const input_number = document.querySelector('#number');

    let contactArray = getContactlist() || [];

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop form from navigating to review.html

        const input_radio = document.querySelector('input[name="contact-method"]:checked')?.value;

        if (input_name.value.trim() !== '' && input_number.value.trim() !== '' && input_radio) {
            let newContact = {
                firstName: input_name.value,
                lastName: input_lname.value.trim() || "N/A",
                phoneNumber: input_number.value,
                contactMethod: input_radio
            };

            contactArray.push(newContact);
            setContactList(); // Save to localStorage

            form.reset(); // Clear form fields

            window.location.href = "review.html"; // Redirect
        } else {
            alert('Please fill out all required fields.');
        }
    });

    function setContactList() {
        localStorage.setItem('infoOfClients', JSON.stringify(contactArray));
    }

    function getContactlist() {
        return JSON.parse(localStorage.getItem('infoOfClients')) || [];
    }
});