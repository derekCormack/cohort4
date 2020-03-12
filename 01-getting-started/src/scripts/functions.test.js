import functions from './functions'


// test for Array machine


test('Does the dom functions work?', () => {
    // expect(functions.add(1,2)).toBe(3);
    // expect(functions.add(101,202)).toBe(303);
    console.log("We are in the tests");
    const element = domfuncs.buildCard();
    expect(element).toBeTruthy();
});


test('Does the addBefore functions work?', () => {
    // expect(functions.add(1,2)).toBe(3);
    // expect(functions.add(101,202)).toBe(303);
    const group = document.createElement("div");
    const element = domfuncs.buildCard("First Insert");
    group.appendChild(element);
    // console.log(group);
    // console.log(group.children);
    // console.log(element.parentElement);
    
    expect(group.children.length).toBe(1);

    const txt = 'New Element'
    domfuncs.addBefore(element, txt);
    expect(group.children.length).toBe(2);
    expect(group.children[0].textContent.substr(0,11)).toBe(txt);
    expect(group.children[1].textContent.substr(0,12)).toBe("First Insert");

});

















// tests for Canadian tax calculator


//  test("check add", () => {
//     expect(functions.brackets(1)).toEqual(0.15); 
//  });






//tests for Calculator

// test("check add", () => {
//     expect(functions.add(1,1)).toEqual(2); 
//     expect(functions.add(2,2)).toEqual(4); 
//     expect(functions.add("2","2")).toEqual(4);
// });

// test("subtract", () => {
//     expect(functions.subtract(3,2)).toEqual(1);
//     expect(functions.subtract(10,7)).toEqual(3);
//     expect(functions.subtract("5","3")).toEqual(2);
// });

// test("divide", () => {
//     expect(functions.divide(8,2)).toEqual(4); 
//     expect(functions.divide("10","5")).toEqual(2); 
// });
 
// test("multiply", () => {
//     expect(functions.multiply(3,2)).toEqual(6); 
//     expect(functions.multiply("10","5")).toEqual(50); 
// });



// expect(functions.subtract(1,1)).toEqual(2); 
// expect(functions.multiply(4,2)).toEqual(2); 
// expect(functions.divide(4,2)).toEqual(8); 


 
//     expect(functions.add(1,1)).toBe(2); 
//     expect(functions.makePizza("mushroom","pepperoni")).
//     toBe("mushroom pepperoni"); 
//     expect(functions.isEven(4)).toBe(true);
//     expect(functions.IsLargerThan9(4)).toBe(false);
//     expect(functions.checksArray([0,1,2,3,4,5,6,7,8,9])).toEqual(2);
//     expect(functions.checksArray(["cat","dog","mouse"])).toEqual("mouse");
//     expect(functions.isObject(8,"mouse",0,true)).toEqual(false);
//     expect(functions.isUndefined([])).toBe(undefined);
//     expect(functions.ifBeer(8)).toBe("Coffee time");
//     expect(functions.addBack(["wildRose", "kokanee", "richardsRed", "blacksmith"]))
//     .toEqual(["wildRose", "kokanee", "richardsRed", "blacksmith","coors"])
//  expect(functions.beerSplice(["wildRose", "kokanee", "richardsRed",
// "blacksmith", "pop")).toEqual(["pop", "kokanee", "richardsRed", "blacksmith"])
