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

    getMostNorthern(lat) {
        //returns northern
        //get the most positive value
        let mostNorthern = 0;
        let cityToBeReturned = undefined;
        this.cities.forEach(city => {
            if (city.latitude > 0 && this.latitude <= 90) {
                if (city.latitude > mostNorthern) {
                    cityToBeReturned = city;
                }
            }
        });
        return cityToBeReturned;
    }

    getMostSouthern(lat) {
        // returns southern
        //get the most negative value
        let mostSouthern = 0;
        let cityToBeReturned = undefined;
        this.cities.forEach(city => {
            if (city.latitude < 0 && this.latitude >= -90) {
                if (city.latitude < mostSouthern) {
                    cityToBeReturned = city;
                }
            }
        });
        return cityToBeReturned;
    }

    getPopulation(number) {
        let totalPopulation = 0;
        this.cities.forEach(city => {
            totalPopulation = totalPopulation + city.population;
        });
        return totalPopulation;
    }

    createCity(name, lat, long, pop) {
        let city = new City(name, lat, long, pop);
        this.cities.push(city);
        return city;
    }

    deleteCity(cityName) {
        //deletes the city
        for (let i = 0; i < this.cities.length; i++) {
            if (this.cities[i].name == cityName) {
                let deletedCity = this.cities.splice(i, 1);
                console.log("Deleted City: ", deletedCity);
            }
        }
    }
}

export default Community;