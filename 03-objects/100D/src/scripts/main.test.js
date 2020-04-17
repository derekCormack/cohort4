import City from "./city.js";

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








