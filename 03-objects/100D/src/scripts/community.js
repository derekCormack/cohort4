class Community {

    cities = [];

    constructor() { }

    whichSphere(lat) {
        if (lat > 0) {
            return "This city resides in the Northern Hemisphere.";
        } else if (lat < 0) {
            return "This city resides in the Southern Hemisphere.";
        } else if (lat == 0) {
            return "No way! this city is on the Equator!";
        }
    }

    getMostNorthern() {
        //returns northern
        //get the most positive value
        let mostNorthern = 0;
        let cityToBeReturned = undefined;
        this.cities.forEach(city => {
            if (parseInt(city.latitude) > 0 && parseInt(city.latitude) <= 90) {  // wierd concat issue solved with parseInt
                if (parseInt(city.latitude) > mostNorthern) {
                    cityToBeReturned = city;
                }
            }
        });
        return cityToBeReturned;
    }

    getMostSouthern() {
        // returns southern
        //get the most negative value
        let mostSouthern = 0;
        let cityToBeReturned = undefined;
        mostSouthern = this.cities[0].latitude;   // store -19
        this.cities.forEach(city => {
            if (parseInt(city.latitude) < 0 && parseInt(city.latitude) >= -90) {
                if (parseInt(city.latitude) < mostSouthern) {
                    cityToBeReturned = city;
                }
            }
        });
        return cityToBeReturned;
    }

    getPopulation(number) {
        let totalPopulation = 0;
        this.cities.forEach(city => {
            totalPopulation = totalPopulation + parseInt(city.population);
        });
        return totalPopulation;
    }

    createCity(city) {
        this.cities.push(city);
    }

    deleteCity(cityName) {
        //deletes the city
        let deletedCity = undefined;
        console.log("city name: ", cityName);
        for (let i = 0; i < this.cities.length; i++) {
            if (this.cities[i].name == cityName) {
                deletedCity = this.cities.splice(i, 1);
            }
        }
        return deletedCity;
    }
}

export default Community;