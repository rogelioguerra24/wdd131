/*This part works for the navigation part of the page. It will make appear that and desappear as well with a event 'click' */
const mainnav2 = document.querySelector('.navigation')
const button2 = document.querySelector('#menu');

button2.addEventListener('click', () => {
	mainnav2.classList.toggle('show');
	button2.classList.toggle('show');
});

/*This part works for the navigation part of the page. It will make appear that and desappear as well with a event 'click' */
const mainnav = document.querySelector('.navigations')
const button = document.querySelector('#menu2');

button.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	button.classList.toggle('show');
});

const temples = [
	{
	templeName: "Aba Nigeria",
	location: "Aba, Nigeria",
	dedicated: "2005, August, 7",
	area: 11500,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	templeName: "Manti Utah",
	location: "Manti, Utah, United States",
	dedicated: "1888, May, 21",
	area: 74792,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	templeName: "Payson Utah",
	location: "Payson, Utah, United States",
	dedicated: "2015, June, 7",
	area: 96630,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	templeName: "Yigo Guam",
	location: "Yigo, Guam",
	dedicated: "2020, May, 2",
	area: 6861,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	templeName: "Washington D.C.",
	location: "Kensington, Maryland, United States",
	dedicated: "1974, November, 19",
	area: 156558,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	templeName: "Lima Perú",
	location: "Lima, Perú",
	dedicated: "1986, January, 10",
	area: 9600,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	templeName: "Mexico City Mexico",
	location: "Mexico City, Mexico",
	dedicated: "1983, December, 2",
	area: 116642,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
	templeName: "Houston Texas",
	location: "Klein, Texas, USA",
	dedicated: "2000, August, 26",
	area: 33970,
	imageUrl:
	"https://churchofjesuschristtemples.org/assets/img/temples/houston-texas-temple/houston-texas-temple-23478.jpg"
	},
	{
	templeName: "Cedar City Utah",
	location: "Cedar City, Utah, USA",
	dedicated: "2015, August, 8",
	area: 42657,
	imageUrl:
	"https://churchofjesuschristtemples.org/assets/img/temples/cedar-city-utah-temple/cedar-city-utah-temple-33347-main.jpg"	
	},
	{
	templeName: "Antofagasta Chile",
	location: "Antofagasta, Chile",
	dedicated: "2020, November, 27",
	area: 23000,
	imageUrl:
	"https://churchofjesuschristtemples.org/assets/img/temples/antofagasta-chile-temple/antofagasta-chile-temple-48608-main.jpg"	
	},
];

createTempleCard(temples);

const oldLink = document.querySelector("#toilet-paper");
const newLink = document.querySelector("#drinks");
const largeLink = document.querySelector("#tunas");
const smallLink = document.querySelector("#cookies");
const homeLink = document.querySelector("#all");

oldLink.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900));
});

newLink.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000));
});

largeLink.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => parseInt(temple.area) > 90000));
});

smallLink.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => parseInt(temple.area) < 10000));
});

homeLink.addEventListener("click", () => {
	createTempleCard(temples);
});



function createTempleCard(filteredTemples) {
    document.querySelector("#templecard").innerHTML = "";
    
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector("#templecard").appendChild(card);
    });
}

window.addEventListener("resize", function () {
    if (window.innerWidth >= 800) {
        document.querySelector("#menu").classList.remove("show");
    }
});