let i = 0;

const functions2 = {
    
    createCard(resultDiv) {
        i++;    //i = i + 1;
        var parentDiv = document.createElement("div");     //This is parent div where all elements will be appended
        parentDiv.setAttribute("class", "w3-card");
        parentDiv.setAttribute("class", "card-style");
        parentDiv.setAttribute("id", "card" + i);   //id="card1"

        var pTag = document.createElement("p");           //This creates empty p tag - <p> </p>
        pTag.textContent = "Card " + i;
        pTag.setAttribute("class", "text-align");
        

        // var pText = document.createTextNode("Card " + i); //This adds the texs inside p tag - Card 1
        // pTag.append(pText);                               //This appends pText to pTag - <p> Card 1 </p>

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
        divForButtons.setAttribute("class", "text-align");
        parentDiv.append(divForButtons);                    //Appending divForButtons to parentDiv

        var brTag = document.createElement("br");

        parentDiv.append(brTag);                            //Appending brtag to parentDiv

        var divForDeleteButton = document.createElement("div");
        var addDeleteButton = document.createElement("button");// delete button
        var addDeleteText = document.createTextNode("Delete");
        divForDeleteButton.setAttribute("class", "text-align");

        addDeleteButton.append(addDeleteText);
        //Giving Id to delete button in order to identify which button is clicked!
        addDeleteButton.setAttribute("id", "buttonDelete" + i);

        divForDeleteButton.append(addDeleteButton);
        parentDiv.append(divForDeleteButton);                        //Appending divForDeleteButton to parentDiv

        resultDiv.append(parentDiv);
        return resultDiv;
    },

    deleteCard(event) {
        if(event.target.id.includes("buttonDelete")) { //buttonDelete1, buttonDelete2
            var cardToBeDeleted = event.target.parentNode.parentNode;  //returns a card
            resultDiv.removeChild(cardToBeDeleted);
        }
    },

    addAfter(event) {   
        var card = event.target.parentNode.parentNode;
        //replacing the card with it's next sibling and this returns the next sibling
        var removedCard = resultDiv.replaceChild(card, card.nextSibling);
        //eg.  1,2,3,4,5 => 1,2,--,3,5 => 1,2,4,3,5
        //insert that next sibling at card's position
        resultDiv.insertBefore(removedCard, card);
    },

    addBefore(event) {
        var card = event.target.parentNode.parentNode;
        var removedCard = resultDiv.replaceChild(card, card.previousSibling);
        //eg.  1,2,3,4,5 => 1,3,--,4,5 => 1,3,2,4,5
        resultDiv.insertBefore(removedCard, card.nextSibling);
    },

    appendElements(element) {
        var liItem = document.createElement("li")       // <li> </li>
        var liName = document.createTextNode(element);
        liItem.append(liName);              // <li> Item 1 </li>
    
        olId.append(liItem);
    },

}

export default functions2;
//You need a click listener on Delete button!!! But you don't have a reference or id of Delete
//Because you created Delete button dynamically with DOM Manipulation!!

//Try to get id of Delete button which is clicked!

// var resultDiv = document.getElementById("resultDiv")//attatch lister on resultDiv view

// var deleteButtonId = undefined;

// resultDiv.addEventListener("click", event => {
//     console.log(event.target.id);
//     deleteButtonId = event.target.id;

//     //Use removeChild() to delete the card...
//     if (deleteButtonId.includes("buttonDelete")) {
//         //this is when user clicks on Delete button
//         //you get the respective card of the delete button clicked
//         //pass that card to removeChild();

//     }

//     if (deleteButtonId !== undefined) {
//         var deleteButton = document.getElementById(deleteButtonId);

//         deleteButton.addEventListener("click", () => {
//             var items = document.querySelectorAll("div");
//             console.log(items);

//             //pass correct card to the removeChild()
//             //resultDiv.removeChild() 
//         })
//     }
// });


// -------------------domfunc.js from larrys git----
// const functions = {

//     buildCard (text) {

//         const div = document.createElement('div');
//         div.appendChild(document.createTextNode(text));

//         const add = document.createElement('button');
//         add.appendChild(document.createTextNode("Add"));
//         div.appendChild(add);

//         const before = document.createElement('button');
//         before.appendChild(document.createTextNode("Before"));
//         div.appendChild(before);

//         return div;
//     },

//     addBefore(node, text) {
//         // console.log(node);
//         // console.log(node.parentElement);


//         const div = functions.buildCard(text);
//         node.parentElement.insertBefore(div,node);
//     }

// };

// export default functions;
// © 2020 GitHub, Inc.


