const today = new Date();

const year = document.querySelector("#currentyear");
year.innerHTML = `${today.getFullYear()}`;

const lastModified = document.lastModified;
const last = document.querySelector("#lastModified")
last.innerHTML = `${lastModified}`;

const windchillElement = document.querySelector("#windchill"); 
const temperature = 22; 
const speed_wind = 4.8;

function calculateWindChill(temperature, speed_wind) {
    const windChill = 13.12 
        + 0.6215 * temperature 
        - 11.37 * (speed_wind ** 0.16) 
        + 0.3965 * temperature * (speed_wind ** 0.16);
    return windChill; 
}

const windChillResult = calculateWindChill(temperature, speed_wind);
windchill.innerHTML=`${windChillResult.toFixed(2)}`