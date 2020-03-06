import functions from './functions.js';

// Add the event listeners
 



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

// Canadian Income Tax 100C


// idButton.addEventListener('click', (() => {
//     idTotal.textContent = brackets();

// document.getElementsById(idButton).onclick =functions.brackets(idIncome);


idButton.addEventListener('click', (() => {
    // var idIncomeD = num.Fixed(2);
    // document.getElementById("idIncome").innerHTML = idIncomeD
      idTotal.textContent = (functions.brackets(idIncome.value)).toFixed(2);
}));













