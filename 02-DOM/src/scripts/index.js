
// main.js   apply parameeter       functions.test.js.


// var mainDiv = document.getElementById("mainDivId");
// mainDiv.addEventListener("click", event => {
//     console.log("Event: ", event);
// });

//set up a universal event listner......on div that you are working on
//  addevent listner  click....blank function....console.log( target)    trace
// back to parent element.


var showButton = document.getElementById("idShowButton");
var addButton = document.getElementById("idAddButton");
var clearAllButton = document.getElementById("idClearButton");
var deleteFirstButton = document.getElementById("idDeleteFirstButton");
var deleteLastButton = document.getElementById("idDeleteLastButton");

let list = ["Item 1", "Item 2", "Item 3"];
let i = 4;

showButton.addEventListener("click", event => {
    
    list.forEach(element => {
        //DOM Manipulation techniques....
        //Link: https://www.hongkiat.com/blog/dom-manipulation-javascript-methods/

        if (i === 4) {
            appendElements(element);
        }
    });
});

addButton.addEventListener("click", event => {
    // list.push("Item " + i);
    var element = "Item " + i;
    appendElements(element);
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

function appendElements(element) {
    var liItem = document.createElement("li")       // <li> </li>
    var liName = document.createTextNode(element);
    liItem.append(liName);              // <li> Item 1 </li>

    olId.append(liItem);
}

//------------------------------working with cards.









