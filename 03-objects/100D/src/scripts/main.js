//city and community link here

import City from "./city.js"
import Community from "./community.js"

// cache variables
var createCityButton = document.getElementById("buttonCreateCity");
var getPopulationButton = document.getElementById("buttonGetPopulation");
var getMostNorth = document.getElementById("buttonGetMostNorth");
var getMostSouth = document.getElementById("buttonGetMostSouth");

const community = new Community();//instantiate  community class

createCityButton.addEventListener("click", () => {
    let cityName = document.getElementById("inputCity").value;
    let lat = document.getElementById("inputLatitude").value;
    let long = document.getElementById("inputLongitude").value;
    let pop = document.getElementById("inputPopulation").value;//grab input values at press of create button

    const cityObject = new City(cityName, lat, long, pop); // "NEW"= instantiate the City CLASS
    community.createCity(cityObject);     
    console.log(cityObject.show());
    clearInputs();
    
//Create cards to display upon create button
    createCardsDynamically();
})

getPopulationButton.addEventListener("click", () => {
    let totalPopulation = community.getPopulation();
    console.log("Total Population: ", totalPopulation);
});


getMostNorth.addEventListener("click", ()=> {
    let mostNorthCity = community.getMostNorthern();
    console.log("Most Northern City: ", mostNorthCity);  //bind this later
    
})

getMostSouth.addEventListener("click", ()=> {
    let mostSouthCity = community.getMostSouthern();
    console.log("Most Southern City: ", mostSouthCity);
})


//Helper function to clear input fields after creating city

function clearInputs() {
    document.getElementById("inputCity").value = '';
    document.getElementById("inputLatitude").value = 0;
    document.getElementById("inputLongitude").value = 0;
    document.getElementById("inputPopulation").value = 0;
}

function createCardsDynamically() {
    //We have to create a card based on our cities array in community
    const containerDiv = document.getElementById("container");
    containerDiv.innerHTML = '';
    community.cities.forEach(city => {
        //string literal - is used to add html in JS------------
        // ${} - string interpolation, dynamic binding of variable to html (in js)
        const card = `   <div class="card m-3 rounded-lrg border border-primary shadow-lg p-3 mb-5 bg-white rounded" style="width: 18rem;">
                <div class="card-body">
                  <h6class="card-title">City Information</h6>
                  <h6 class="card-subtitle mb-2 text-muted">mystery community</h6>
                  <p class="card-text">City: ${city.name}</p>        
                  <p class="card-text">Latitude: ${city.latitude}</p>
                  <p class="card-text">Longitude: ${city.longitude}</p>
                  <p class="card-text">Population: ${city.population}</p>
                </div>
            </div>  `
        containerDiv.innerHTML = containerDiv.innerHTML + card;
    })
}
