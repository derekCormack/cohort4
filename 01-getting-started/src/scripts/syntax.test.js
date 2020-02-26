import functions from './syntax'

test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("small");
    expect(functions.add(1,1)).toBe(2); 
    expect(functions.makePizza("mushroom","pepperoni")).
    toBe("mushroom pepperoni"); 
    expect(functions.isEven(4)).toBe(true);
    expect(functions.IsLargerThan9(4)).toBe(false);
    expect(functions.checksArray([0,1,2,3,4,5,6,7,8,9])).toEqual(2);
    expect(functions.checksArray(["cat","dog","mouse"])).toEqual("mouse");
    expect(functions.isObject(8,"mouse",0,true)).toEqual(false);
    expect(functions.isUndefined([])).toBe(undefined);
    expect(functions.ifBeer(8)).toBe("Coffee time");
       
});
