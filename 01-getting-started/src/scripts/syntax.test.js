import functions from './syntax'

let array10 =[1,2,3,4,5,6,7,8,9] 

test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("small");
    expect(functions.add(1,1)).toBe(2); 
    expect(functions.makePizza("mushroom","pepperoni")).
    toBe("mushroom pepperoni"); 
    expect(functions.isEven(4)).toBe(true);
    expect(functions.IsLargerThan9(4)).toBe(false);
    expect(functions.checksArray(x)).toBe(7);

});
