import functions from './functions.js';

// Add the event listeners
 

addNums.addEventListener('click', (() => {
    result.textContent = functions.add(idNum1.value, idNum2.value);
    console.log("click", idNum1.value, idNum2.value);
}));

subtractNums.addEventListener('click', (() => {
    result.textContent = functions.subtract(idNum1.value, idNum2.value);
    console.log("click", idNum1.value, idNum2.value);
}));

divideNums.addEventListener('click', (() => {
    result.textContent = functions.divide(idNum1.value, idNum2.value);
    console.log("click", idNum1.value, idNum2.value);
}));

multiplyNums.addEventListener('click', (() => {
    result.textContent = functions.multiply(idNum1.value, idNum2.value);
    console.log("click", idNum1.value, idNum2.value);
}));
