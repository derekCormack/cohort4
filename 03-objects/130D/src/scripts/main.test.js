import City from "./city.js";
import Community from "./community.js";

test("is my city working?", () => {
    //This test is for testing the constructor
    let city = new City('Calgary', '45N', '40E', 120000);
    expect(city.name).toBe("Calgary");
    expect(city.latitude).toBe("45N");
    expect(city.longitude).toBe("40E");
    expect(city.population).toBe(120000);
});

test("is show() method working?", () => {
    let city = new City('Edmonton', '50N', '55E', 100000);
    expect(city.show()).toBe("City Name: " + city.name + " Latitude: " + city.latitude + " Longitude: " + city.longitude + " Population: " + city.population);
});


test("is movedIn() method working?", () => {
    let cityMovedIn = new City('Calgary', -89.00, -179.00, 100000);
    expect(cityMovedIn.movedIn(1)).toBe(100001);
});

test("is movedOut() method working?", () => {
    let cityMovedOut = new City('Calgary', -89.00, -179.00, 100000);
    expect(cityMovedOut.movedOut(1)).toBe(99999);
});

test("is howBig() method working?", () => {
    let cityHowBig = new City('Calgary', -89.00, -179.00, 120000);
    expect(cityHowBig.howBig(cityHowBig.population)).toBe("City"); //each of conditions
    cityHowBig.movedOut(30000);
    expect(cityHowBig.howBig(cityHowBig.population)).toBe("Large town");
    cityHowBig.movedOut(71000);
    //current = 19000
    expect(cityHowBig.howBig(cityHowBig.population)).toBe("Town");
    cityHowBig.movedOut(18500);
    //current = 500
    expect(cityHowBig.howBig(cityHowBig.population)).toBe("Village");
    cityHowBig.movedOut(449);
    //current = 51
    expect(cityHowBig.howBig(cityHowBig.population)).toBe("Hamlet");
    cityHowBig.movedOut(51);
    expect(cityHowBig.howBig(cityHowBig.population)).toBe("Nobody lives here!");
});



//////////////////-------------------Community.js test cases---------------------//////////////////

test("is whichSphere() method working?", () => {
    let community = new Community();
    let city1 = new City('Calgary', -89, -179, 120000);
    expect(community.whichSphere(city1.latitude)).toBe("This city resides in the Southern Hemisphere.");
    let city2 = new City('Calgary', 89, 179, 120000);
    expect(community.whichSphere(city2.latitude)).toBe("This city resides in the Northern Hemisphere.");
    let city3 = new City('Calgary', 0, 179, 120000);
    expect(community.whichSphere(city3.latitude)).toBe("No way! this city is on the Equator!");
    
})

test("is getMost Northern method(+lat) working?", () => {
    let community = new Community();

    let city1 = new City('Calgary', 19, -179, 120000);
    let city2 = new City('Vancouver', 59, -179, 120000);
    let city3 = new City('Toronto', 29, -179, 120000);
    let city4 = new City('Edmonton', 79, -179, 120000);

    community.createCity(city1);
    community.createCity(city2);
    community.createCity(city3);
    community.createCity(city4);

    // cities = ['city1', 'city2', 'city3', 'city4']
    let mostNorthernCity = community.getMostNorthern();
    expect(mostNorthernCity.name).toBe("Edmonton");
}); 

test("is getMost Southern method(-lat) working?", () => {
    let community = new Community();

    let city1 = new City('Calgary', -89, -179, 120000);
    let city2 = new City('Vancouver', -50, -179, 120000);
    let city3 = new City('Toronto', -70, -179, 120000);
    let city4 = new City('Edmonton', -10, -179, 120000);

    community.createCity(city1);
    community.createCity(city2);
    community.createCity(city3);
    community.createCity(city4);

    let mostSouthernCity = community.getMostSouthern();
    console.log("Most Southern City ", mostSouthernCity)
    expect(mostSouthernCity.name).toBe("Edmonton");
}); 

// Math.min(...array);    // Returns minimum element in array


    // createCity(name, lat, long, pop) {
    //     let city = new City(name, lat, long, pop);
    //     this.cities.push(city);
    //     return city;
    // }
// getMostNorthern(lat) {
//     //returns northern
//     //get the most positive value
//     let mostNorthern = 0;
//     let cityToBeReturned = undefined;
//     this.cities.forEach(city => {
//         if (city.latitude > 0 && this.latitude <= 90) {
//             if (city.latitude > mostNorthern) {
//                 cityToBeReturned = city;
//             }
//         }
//     });
//     return cityToBeReturned;
// }

// getMostSouthern(lat) {
//     // returns southern
//     //get the most negative value
//     let mostSouthern = 0;
//     let cityToBeReturned = undefined;
//     this.cities.forEach(city => {
//         if (city.latitude < 0 && this.latitude >= -90) {
//             if (city.latitude < mostSouthern) {
//                 cityToBeReturned = city;
//             }
//         }
//     });
//     return cityToBeReturned;
// }












