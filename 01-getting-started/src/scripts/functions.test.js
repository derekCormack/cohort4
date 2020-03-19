import functions from './functions'


// Arrays tests-------------------------

test('Array add number', () => {
    expect(functions.addingArray(([1,2]),3)).toStrictEqual([1,2,3]);
});

test('Total Array', () => {
  expect(functions.totalArr([2, 3, 5])).toStrictEqual(10);
});

test('Total Array', () => {
  expect(functions.totalArr([1, 2, 3, 5])).toStrictEqual(11);
});

test('Clear Array', () => {
  expect(functions.clearArray([])).toStrictEqual([]);
});










// tests for Canadian tax calculator


//  test("check add", () => {
//     expect(functions.brackets(1)).toEqual(0.15); 
//  });


/*
 test('two plus two is four', () => {
   expect(2 + 2).toBe(4);
 });
 test('object assignment', () => {
   const data = {one: 1};
   data['two'] = 2;
   expect(data).toEqual({one: 1, two: 2});
 });
 test('adding positive numbers is not zero', () => {
   for (let a = 1; a < 10; a++) {
     for (let b = 1; b < 10; b++) {
       expect(a + b).not.toBe(0);
     }
   }
 });
 test('null', () => {
   const n = null;
   expect(n).toBeNull();
   expect(n).toBeDefined();
   expect(n).not.toBeUndefined();
   expect(n).not.toBeTruthy();
   expect(n).toBeFalsy();
 });
 
 test('zero', () => {
   const z = 0;
   expect(z).not.toBeNull();
   expect(z).toBeDefined();
   expect(z).not.toBeUndefined();
   expect(z).not.toBeTruthy();
   expect(z).toBeFalsy();
 });
 test('there is no I in team', () => {
   expect('team').not.toMatch(/I/);
 });
 
 test('but there is a "stop" in Christoph', () => {
   expect('Christoph').toMatch(/stop/);
 });
 const shoppingList = [
   'diapers',
   'kleenex',
   'trash bags',
   'paper towels',
   'beer',
 ];
 
 test('the shopping list has beer on it', () => {
   expect(shoppingList).toContain('beer');
   expect(new Set(shoppingList)).toContain('beer');
 });
 function compileAndroidCode() {
   throw new Error('you are using the wrong JDK');
 }
 
 test('compiling android goes as expected', () => {
   expect(compileAndroidCode).toThrow();
   expect(compileAndroidCode).toThrow(Error);
 
   // You can also use the exact error message or a regexp
   expect(compileAndroidCode).toThrow('you are using the wrong JDK');
   expect(compileAndroidCode).toThrow(/JDK/);
 });

//truthiness---------------------------------------------------------
 In tests you sometimes need to distinguish between undefined, 
 null, and false, but you sometimes do not want to treat these 
 differently. Jest contains helpers that let you be 
 explicit about what you want.

toBeNull matches only null
toBeUndefined matches only undefined
toBeDefined is the opposite of toBeUndefined
toBeTruthy matches anything that an if statement treats as true
toBeFalsy matches anything that an if statement treats as false
test('null', () => {
   const n = null;
   expect(n).toBeNull();
   expect(n).toBeDefined();
   expect(n).not.toBeUndefined();
   expect(n).not.toBeTruthy();
   expect(n).toBeFalsy();
 });
 
 test('zero', () => {
   const z = 0;
   expect(z).not.toBeNull();
   expect(z).toBeDefined();
   expect(z).not.toBeUndefined();
   expect(z).not.toBeTruthy();
   expect(z).toBeFalsy();
 });

 */
//----------------------------------------------------------------------------



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
