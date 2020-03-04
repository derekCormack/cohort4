import functions from './functions.js';
import functions from './taxMain.js';
// Add the event listeners
 
// Canadian Income Tax 100C

idButton.addEventListener('click', (() => {
    idTotal.textContent = functions.brackets(idButton.value);
    
}));


//  Calculator Event Listeners 100C


addNums.addEventListener('click', (() => {
    result.textContent = functions.add(idNum1.value, idNum2.value);
    
}));

subtractNums.addEventListener('click', (() => {
    result.textContent = functions.subtract(idNum1.value, idNum2.value);
    
}));

divideNums.addEventListener('click', (() => {
    result.textContent = functions.divide(idNum1.value, idNum2.value);
    
}));

multiplyNums.addEventListener('click', (() => {
    result.textContent = functions.multiply(idNum1.value, idNum2.value);
    
}));













