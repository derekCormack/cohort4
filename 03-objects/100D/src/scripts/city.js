class City {
    name = '';
    latitude = '';
    longitude = '';
    population = 0;

    constructor(city, lat, long, pop) {
        this.name = city;
        this.latitude = lat;
        this.longitude = long;
        this.population = pop; 
    }

    show() {
        return "City Name: " + this.name + " Latitude: " + this.latitude + " Longitude: " + this.longitude + " Population: " + this.population;
    }

    movedIn(number) {
        if(number) {
            this.population = this.population + number;
            return this.population;
        }
    }

    movedOut(number) {
        if(number) {
            this.population = this.population - number;
            return this.population;
        }
    }
     
    howBig(number) {
        if(number >= 100000) {
            return "City";
        } else if(number >= 20000 && number < 100000) {
            return "Large town";
        } else if(number >= 1000 && number < 20000) {
            return "Town";
        } else if(number >= 100 && number < 1000) {
            return "Village";
        } else if(number >= 1 && number < 100) {
            return "Hamlet";
        } else {
            return "Nobody lives here!";
        }    
    }
}

export default City;