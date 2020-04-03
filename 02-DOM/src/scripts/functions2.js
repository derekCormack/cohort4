var addCard = document.getElementById("idAddCard");

let i = 0;

addCard.addEventListener("click", event => {
    //Step 1: create a card
    //     <div class="w3-card" style="" id="card1">
    //     <p>Card 1</p>
    //     <div>
    //         <button>Add Before </button>
    //         <button>Add After </button>  
    //     </div>
    //     <br>
    //     <div>
    //     <button>Delete</button>
    //     </div>
    //     </div>
    //Step 2: append to the "resultDiv" div element
    
    i++;    //i = i + 1;
    var parentDiv = document.createElement("div");     //This is parent div where all elements will be appended
    parentDiv.setAttribute("class", "w3-card");
    parentDiv.setAttribute("id", "card" + i);   //id="card1"

    var pTag = document.createElement("p");           //This creates empty p tag - <p> </p>
    var pText = document.createTextNode("Card " + i); //This adds the texs inside p tag - Card 1
    pTag.append(pText);                               //This appends pText to pTag - <p> Card 1 </p>

    parentDiv.append(pTag);                           //Appending pTag to parentDiv

    var divForButtons = document.createElement("div");

    var addBeforeButton = document.createElement("button");// add before button
    var addBeforeText = document.createTextNode("Add Before");
    addBeforeButton.append(addBeforeText);

    var addAfterButton = document.createElement("button");// add after button
    var addAfterText = document.createTextNode("Add After");
    addAfterButton.append(addAfterText);

    divForButtons.append(addBeforeButton);
    divForButtons.append(addAfterButton);

    parentDiv.append(divForButtons);                    //Appending divForButtons to parentDiv

    var brTag = document.createElement("br");

    parentDiv.append(brTag);                            //Appending brtag to parentDiv

    var divForDeleteButton = document.createElement("div");
    var addDeleteButton = document.createElement("button");// delete button
    var addDeleteText = document.createTextNode("Delete");
    
    addDeleteButton.append(addDeleteText);
    //Giving Id to delete button in order to identify which button is clicked!
    addDeleteButton.setAttribute("id", "buttonDelete"+i);

    divForDeleteButton.append(addDeleteButton);
    parentDiv.append(divForDeleteButton);                        //Appending divForDeleteButton to parentDiv

    resultDiv.append(parentDiv);
})


//You need a click listener on Delete button!!! But you don't have a reference or id of Delete
//Because you created Delete button dynamically with DOM Manipulation!!

//Try to get id of Delete button which is clicked!

var resultDiv = document.getElementById("resultDiv")//attatch lister on resultDiv view

var deleteButtonId = undefined;

resultDiv.addEventListener("click", event => {
    console.log(event.target.id);
    deleteButtonId = event.target.id;

    if(deleteButtonId !== undefined) {
        var deleteButton = document.getElementById(deleteButtonId);
    
        deleteButton.addEventListener("click", () => {
            var items = document.querySelectorAll("div");
            console.log(items);
    
            //pass correct card to the removeChild()
            //resultDiv.removeChild() 
        })
    }
});