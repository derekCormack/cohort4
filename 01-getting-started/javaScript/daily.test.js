
import testObject from './daily.test'

test("testObject", () => {
  expect(testObject.convertToFahrenheit(5)).toEqual(41);
  expect(testObject.convertToFahrenheit(-100)).toBeLessThan(0); 
   
});