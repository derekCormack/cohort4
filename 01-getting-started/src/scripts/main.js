import functions from './functions.js';
const arrayNew = [];

// Array Event listeners

console.log("is this working from main.js")
idAddArray.addEventListener('click', (() => {
    // idOutputArray.textContent = functions.addingArray(arrayNew, Number(idArrayIn.value));
    console.log("hello from AddEvent");
}));



//  Calculator Event Listeners 100C----------------------------


idClearArray.addEventListener('click', (() => {
    idOutputArrayt.getElementById("idClearArray").innerHTML = functions.clearArray([]);

}));

//  Calculator Event Listeners 100C--------------------------

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













