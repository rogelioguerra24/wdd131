/*This part works for the navigation part of the page. It will make appear that and desappear as well with a event 'click' */
const mainnav2 = document.querySelector('.navigation')
const button2 = document.querySelector('#menu');

button2.addEventListener('click', () => {
	mainnav2.classList.toggle('show');
	button2.classList.toggle('show');
});

/*This part works for the navigation part of the page. It will make appear that and desappear as well with a event 'click' */
const mainnav = document.querySelector('.navigations')
const button = document.querySelector('.second-navi');

button.addEventListener('click', () => {
	mainnav.classList.toggle('show2');
	button.classList.toggle('show2');
});


const products = [
	{
        productNAme: "Green 'Suave' Paper",
        price: "S/. 20.00",
        code: "paper",
        imageUrl: "images/paper1.webp" // Se corrigió la coma
    },
	{
	productNAme: "Orange 'Suave' Paper",
	price: "S/. 13.00",
    code: "paper", 
	imageUrl:
	"images/paper2.webp",
	},
	{
	productNAme: "Tuna Florida Filet",
	price: "S/. 5.00",
    code: "tuna", 
	imageUrl:
	"images/tuna1.webp"
	},
	{
	productNAme: "Tuna Primor Filet",
	price: "S/. 4.80",
    code: "tuna", 
	imageUrl:
	"images/tuna2.webp"
	},
	{
	productNAme: "Sporade Red 1.5lt",
	price: "S/. 24.00",
    code: "drink", 
	imageUrl:
	"images/drink1.webp"
	},
	{
	productNAme: "INKA COLA 3LT",
	price: "S/. 37.00",
    code: "drink", 
	imageUrl:
	"images/drink2.webp"
	},
	{
	productNAme: "Guaranita 500ml",
	price: "S/. 20.00",
    code: "drink",
	imageUrl:
	"images/drink3.webp"
	},
	{
	productNAme: "Morochas",
	price: "S/. 8.00",
    code: "cookie", 
	imageUrl:
	"images/cookie1.webp"
	},
	{
	productNAme: "Picaras",
	price: "S/. 10.00",
	dedicated: "2015, August, 8",
    code: "cookie", 
	area: 42657,
	imageUrl:
	"images/cookie2.webp"
	},
];

createProductcart(products);

const toilet = document.querySelector("#toilet-paper");
const drinks = document.querySelector("#drinks");
const tunas = document.querySelector("#tunas");
const cookies = document.querySelector("#cookies");
const all = document.querySelector("#all");

toilet.addEventListener("click", () => {
	createProductcart(products.filter(product => product.code == "paper"));
});

drinks.addEventListener("click", () => {
	createProductcart(products.filter(product => product.code == "drink"));
});

tunas.addEventListener("click", () => {
	createProductcart(products.filter(product => product.code == "tuna"));
});

cookies.addEventListener("click", () => {
	createProductcart(products.filter(product => product.code == "cookie"));
});

all.addEventListener("click", () => {
	createProductcart(products);
});



function createProductcart(filteredproducts) {
    document.querySelector("#templecard").innerHTML = "";
    
    filteredproducts.forEach(product => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let price = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = product.productNAme;
        price.innerHTML = `<span class="label">Price:</span> ${product.price}`;

        img.setAttribute("src", product.imageUrl);
        img.setAttribute("alt", `${product.productNAme} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(img);

        document.querySelector("#templecard").appendChild(card);
    });
}

window.addEventListener("resize", function () {
    if (window.innerWidth >= 800) {
        document.querySelector("#menu").classList.remove("show");
    }
});