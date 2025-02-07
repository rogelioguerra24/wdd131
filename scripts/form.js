/*This is to obtain dates and times from the network  */
const today = new Date();

const year = document.querySelector("#currentyear");
year.innerHTML = `${today.getFullYear()}`;

const lastModified = document.lastModified;
const last = document.querySelector("#lastModified")
last.innerHTML = `${lastModified}`;

/* This is to append options to the html */
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

addselectoption(products);

function addselectoption (options) {
    
    let selectElement = document.querySelector("#product"); // This line is for select the container of ID
    selectElement.innerHTML = `<option value="" selected disabled>Please Select</option>`; //This line is for append only text inside of select
    // If you want to clean the next part of the code only let the innet HTMl with "" 

    options.forEach(option => {
        let casilla = document.createElement("option");
        casilla.textContent = option.name; // Assign the text inside of option
        casilla.value = option.id; // Assing ID as the value
        selectElement.appendChild(casilla); // Append all to the casilla id
    })
}
