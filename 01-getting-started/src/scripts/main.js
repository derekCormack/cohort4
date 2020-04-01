import functions from './functions.js';

const arrayNew = [];

/* <input id="idArrayIn"><br><br>
<button id="idAddArray" >ADD</button>
<button id="idShowArray" >SHOW</button>
<button id="idTotalArray" >TOTAL</button>
<button id="idClearArray" >CLEAR</button><br>

<h2> Result:<h2>
 <p1 id="idOutputArray">Output Goes Here </p1> */

 var addButton = document.getElementById("idAddArray");
 var showButton = document.getElementById("idShowArray");
 var totalButton = document.getElementById("idTotalArray");
 var clearButton = document.getElementById("idClearArray");
 var lookupButton = document.getElementById("idLookup");// dictionary part
  
addButton.addEventListener("click", () => {
    console.log("Add button is clicked");
    functions.addingArray(arrayNew, idArrayIn.value);
});

showButton.addEventListener("click", () => {
    document.getElementById("idOutputArray").innerHTML = arrayNew.toString();
});

totalButton.addEventListener("click", () => {
    console.log("ArrayNew value: ", arrayNew);
    //We can convert string array to int array before passing it to totalArr()
    console.log("Addition is: ", functions.totalArr(arrayNew));
    document.getElementById("idOutputArray").innerHTML = functions.totalArr(arrayNew);
});

clearButton.addEventListener("click", () => {
    console.log("is Button clicked?")
    document.getElementById("idOutputArray").innerHTML = functions.clearArray(arrayNew);

});

lookupButton.addEventListener("click", () => {
    console.log("is Button clicked?");
    document.getElementById("idOutputObj").innerHTML = functions.lookupObject(idObjectIn.value);
    //document.getElementById("outputText").value = functions.lookupObject(idObjectIn.value);
});



////  1.   Get the p tag from dom
///    document.getElementById("idOutputArray")

//    2. bind the array value to the p tag
//     arrayNew.toString();      "=" is binding/ assignment operator




// idAddArray.addEventListener('click', (() => {
//     // idOutputArray.textContent = functions.addingArray(arrayNew, Number(idArrayIn.value));
//     console.log("hello from AddEvent");
//     // grab the number from input and print
// var addButton = document.getElementByTagName("idAddArray");
// console.log(addButton);

//     //call that function with that number which gives a value
// addButton.addEventListener("click",
//  addingArray(newArray, addButton)) {console.log(newArray, addButton)};



    // print out value to console.


    
    // dont update html.

//     element.addEventListener("click", function(){ alert("Hello World!"); });

// }));

// idAddArray.addEventListener('click', functions.addingArray() )









//  Calculator Event Listeners 100C----------------------------


// idClearArray.addEventListener('click', (() => {
//     idOutputArrayt.getElementById("idClearArray").innerHTML = functions.clearArray([]);

// }));

//  Calculator Event Listeners 100C--------------------------

// addNums.addEventListener('click', (() => {
//     result.textContent = functions.add(idNum1.value, idNum2.value);

// }));

// subtractNums.addEventListener('click', (() => {
//     result.textContent = functions.subtract(idNum1.value, idNum2.value);

// }));

// divideNums.addEventListener('click', (() => {
//     result.textContent = functions.divide(idNum1.value, idNum2.value);

// }));

// multiplyNums.addEventListener('click', (() => {
//     result.textContent = functions.multiply(idNum1.value, idNum2.value);

// }));


// Canadian Income Tax 100C
// idButton.addEventListener('click', (() => {
//     idTotal.textContent = brackets();
// document.getElementsById(idButton).onclick =functions.brackets(idIncome);


// idButton.addEventListener('click', (() => {
//     // var idIncomeD = num.Fixed(2);
//     // document.getElementById("idIncome").innerHTML = idIncomeD
//     idTotal.textContent = (functions.brackets(idIncome.value)).toFixed(2);
// }));



