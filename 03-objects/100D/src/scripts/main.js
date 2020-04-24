//city and community link here

import City from "./city.js"
import Community from "./community.js"

// cache variables
var createCityButton = document.getElementById("buttonCreateCity");
//remove old buttons  
// var getPopulationButton = document.getElementById("buttonGetPopulation");
// var getMostNorth = document.getElementById("buttonGetMostNorth");
// var getMostSouth = document.getElementById("buttonGetMostSouth");
const containerDiv = document.getElementById("container");
var totalPopulationInput = document.getElementById("idDisplaytotalPop");
var mostNorthInput = document.getElementById("idDisplayMostN");
var mostSouthInput = document.getElementById("idDisplayMostS");

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

    //new method for displaying updated global info 
    showCommunityData();
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
    containerDiv.innerHTML = '';
    community.cities.forEach(city => {
        //string literal - is used to add html in JS------------
        // ${} - string interpolation, dynamic binding of variable to html (in js)
        //  below, using event listener on  id = "idTrashCan-cityName"
        const card = `   <div class="card m-3 rounded-lrg border border-primary shadow-lg p-3 mb-5 bg-white rounded" style="width: 18rem;">
                <div class="card-body">
                    <span id="idTrashCan-${city.name}" class="float-right">
                        <i class="fas fa-trash"></i>
                    </span>  
                    <h6 class="card-title">City Information</h6>
                    <h6 class="card-subtitle mb-2 text-muted">mystery community</h6>
                    <p class="card-text">City: ${city.name}</p>        
                    <p class="card-text">Latitude: ${city.latitude}</p>
                    <p class="card-text">Longitude: ${city.longitude}</p>
                    <p class="card-text">Population: ${city.population}</p>
                </div>
            </div>  `
        
        // Alternative for above HTML in string literal, we can use DOM Manipulation...
        // let element = document.createElement("div");  //<div> </div>
        // element.setAttribute("class", "card-body");   //<div class="card-body"> </div>
        containerDiv.innerHTML = containerDiv.innerHTML + card;
    });

    containerDiv.addEventListener("click", event => {
        let idDelete = event.target.parentElement.id;
        if(idDelete) {
            let cityName = event.target.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.textContent;
            // cityName = "city: cityName"
            // substring(5) = is to get part of string
            // indexOf() = is to get an index
            // trim() = to delete spaces
            let deletedCity = community.deleteCity(cityName.substring(cityName.indexOf(" ")).trim());
            createCardsDynamically();
        }
        //event.stopPropagation();  //stops event bubbling, multiple click listener events
    }) 
}

function showCommunityData() {
    //this will bind population, northern and southern cities on UI
    let totalPopulation = community.getPopulation();
    totalPopulationInput.value = totalPopulation;       //binding data to the value attribute of Input, if we had span/div, we could have binded it to innerHTML attribute
    let mostNorthCity = community.getMostNorthern();
    if(mostNorthCity) {
        mostNorthInput.value = mostNorthCity.latitude;
    }
    //mostNorthInput.value = mostNorthCity?.latitude;     //? : Nullable check
    let mostSouthCity = community.getMostSouthern();
    if(mostSouthCity) {
        mostSouthInput.value = mostSouthCity?.latitude;
    }
}

//It shows me, U left the call on hangout....u there?