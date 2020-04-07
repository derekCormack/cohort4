import functions2 from './functions2.js';

///event listners here
var addCard = document.getElementById("idAddCard");
var showButton = document.getElementById("idShowButton");
var addButton = document.getElementById("idAddButton");
var clearAllButton = document.getElementById("idClearButton");
var deleteFirstButton = document.getElementById("idDeleteFirstButton");
var deleteLastButton = document.getElementById("idDeleteLastButton");
var resultDiv = document.getElementById("resultDiv");

let list = ["Item 1", "Item 2", "Item 3"];
let i = 4;

addCard.addEventListener("click", event => {
    functions2.createCard(resultDiv);   //inserting cards into resultDiv
});

// resultDiv.addEventListener("click", event => {
//     functions2.deleteCard(event);// delete card from result div
// });

resultDiv.addEventListener("click", event => {
    
    if(event.target.textContent.includes("Delete")) {
        functions2.deleteCard(event);
    }

    if(event.target.textContent.includes("Add After")) {
        functions2.addAfter(event);
    }

    if(event.target.textContent.includes("Add Before")) {
        functions2.addBefore(event);
    }
})



//-------------------------Basic dom excersise
showButton.addEventListener("click", event => {

    list.forEach(element => {
        //DOM Manipulation techniques....
        //Link: https://www.hongkiat.com/blog/dom-manipulation-javascript-methods/

        if (i === 4) {
            functions2.appendElements(element);
        }
    });
});

addButton.addEventListener("click", event => {
    // list.push("Item " + i);
    var element = "Item " + i;
    functions2.appendElements(element);
    i++;
});

deleteFirstButton.addEventListener("click", event => {
    //Step 1: get "Item 1" li     ==    <li> Item 1 </li>
    //Step 2: pass it to removeChild() function
    var item1 = document.querySelector("li");
    olId.removeChild(item1);
});

clearAllButton.addEventListener("click", event => {
    var items = document.querySelectorAll("li");
    items.forEach(item => {
        olId.removeChild(item);
    })
});

deleteLastButton.addEventListener("click", event => {
    var items = document.querySelectorAll("li");
    items.forEach(item => {
        olId.removeChild(item);
    })
});


//------------------------------working with cards.
