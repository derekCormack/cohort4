class Community {

    constructor() { }

    whichSphere(lat) {
        //return either northern or southern hemisphere
    }

    getMostNorthern(lat) {
        //returns northern
    }

    getMostSouthern(lat) {
        // returns southern
    }

    getPopulation(number) {
       //returns population
    }

    createCity(name, lat, long, pop) {
       let city = new City(name, lat, long, pop);
       return city;
    }
    
    deleteCity() {
       //deletes the city
    }
}

export default Community;