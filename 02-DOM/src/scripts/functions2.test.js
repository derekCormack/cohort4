 import functions2 from './functions2.js'


// // Card TDD test   -------------------------
//     <div class="w3-card" style="" id="card1">
    //     <p>Card 1</p>
    //     <div>
    //         <button>Add Before </button>
    //         <button>Add After </button>  
    //     </div>
    //     <br>
    //     <div>
    //        <button>Delete</button>
    //     </div>
    //</div>


  test('Does it add an <p> tag to card 1?', () => {
    //console.log(document.getElementById('resultDiv'));
    const group = document.createElement("div"); //creating <div> </div>
    group.setAttribute("id", "resultDiv");      //<div id="resultDiv"> </div> 
    //we have just created a html element div but it does not have any children!
    //so the .length will not work!
    //var i = group.children.length;  //length = 0
    const resultDivCard = functions2.createCard(group);  //length = 1
    expect(resultDivCard.children.length).toBe(1);
    console.log("who is children of resultDiv now?", group.children)
    expect(resultDivCard.children[0].firstElementChild.textContent).toBe("Card 1");
    // expect(resultDivCard.children[0].lastElementChild.firstElementChild.textContent).toBe("Delete");
    // expect(resultDivCard.children[0].lastElementChild.firstElementChild.textContent).toBe("Delete");
    // expect(resultDivCard.children[0].childNodes[1].firstElementChild.textContent).toBe("Add Before");

  });

  test('Does Delete button exist?', () => {
    const group = document.createElement("div"); //creating <div> </div>
    group.setAttribute("id", "resultDiv");      //<div id="resultDiv"> </div>
    const resultDivCard = functions2.createCard(group); 
    expect(resultDivCard.children[0].lastElementChild.firstElementChild.textContent).toBe("Delete");
  });
    
  test('Does Add After button exist?', () => {
      const group = document.createElement("div"); //creating <div> </div>
      group.setAttribute("id", "resultDiv");      //<div id="resultDiv"> </div>
      const resultDivCard = functions2.createCard(group); 
      expect(resultDivCard.children[0].lastElementChild.firstElementChild.textContent).toBe("Delete");
  });
  
  test('Does Add Before button exist?', () => {
      const group = document.createElement("div"); //creating <div> </div>
      group.setAttribute("id", "resultDiv");      //<div id="resultDiv"> </div>
      const resultDivCard = functions2.createCard(group); 
      expect(resultDivCard.children[0].childNodes[1].firstElementChild.textContent).toBe("Add Before");
  });

// JSX type build DOM in JS re-blair    (not used...seemed like an ineffective approach
//  as we should be testing dom as its being created)

//  document.body.innerHTML =
//  `<div  class="w3-gray" id="mainDivId">` +
//  `<h1 style="text-align: center;" >Working With Cards</h1>` +
//  `<div style="margin:auto; text-align: center;">` +
//  `<button id="idAddCard">Add Card</button>` +
//  `</div>`+
//  `<div id="resultDiv">` +
//  `</div>` +
//  `</div>`;   // hardcode starting DOM to be manipulated


// expect($('#username').text()).toEqual('Johnny Cash - Logged In');


  // test('Array add to', () => {
//   expect(functions.addingArray(([0, 0]), 0)).toStrictEqual([0, 0, 0]);
// });

// test('Array add to', () => {
//   expect(functions.addingArray(([1, 1]), 1)).toStrictEqual([1, 1, 1]);
// 
// })
//--------------------------------extracted from larrys git domfunc.test.js---
// import domfuncs from './domfunc'




// test('Does the plumbing work?', () => {
    
//     // console.log("Hello World from dompp3");
//     let div, txtnode;
//     const group = document.createElement('div');

//     div = document.createElement('div');
//     txtnode = document.createTextNode("First");
//     div.append(txtnode);

//     group.append(div);

//     console.log(group.children.length);
//     console.log(group.children[0].textContent);

// });
// expect($('#username').text()).toEqual('Johnny Cash - Logged In');

// extracted from Dompres /src

// test('Does the addDiv work?', () => {
//     const group = document.createElement('div');
//     const txt = "First Node"
//     // domP3.addDivSimple(group, txt);
//     domP3.addDivComplex(group, txt);
//     expect(group.children.length).toBe(1);
//     expect(group.children[0].textContent).toBe(txt);

// });


//----------------------dom2 function test---------------

// test('Does the dom functions work?', () => {
//   const parent = document.createElement('div');

//   let div = document.createElement('div');
//   let txtstuff = document.createTextNode("First");
//   div.appendChild(txtstuff);
//   parent.append(div);

//   div = document.createElement('div');
//   txtstuff = document.createTextNode("Second");
//   div.appendChild(txtstuff);
//   parent.append(div);

//   div = document.createElement('div');
//   txtstuff = document.createTextNode("One.One");
//   div.appendChild(txtstuff);

//   parent.children[0].after(div);

//   // div.appendChild(txtstuff);

//   console.log(parent.children.length);
//   console.log(parent.children[0]);
//   console.log(parent.children[0].textContent);
//   console.log(parent.children[1]);
//   console.log(parent.children[1].textContent);
//   console.log(parent.children[2]);
//   console.log(parent.children[2].textContent);
  
// });


// // const element = domfuncs.buildCard();
// // expect(element).toBeTruthy();

//   // expect(functions.add(1,2)).toBe(3);
//   // expect(functions.add(101,202)).toBe(303);

// // const div = document.createElement('div');
// // div.appendChild(document.createTextNode(text));



//-----------------------dom test p3   larry git
//
// npm test dom-p3 -- -t plumb
//
// import domP3 from './dom-p3'

// test('Does the plumbing work?', () => {
    
//     // console.log("Hello World from dompp3");
//     let div, txtnode;
//     const group = document.createElement('div');

//     div = document.createElement('div');
//     txtnode = document.createTextNode("First");
//     div.append(txtnode);

//     group.append(div);

//     console.log(group.children.length);
//     console.log(group.children[0].textContent);

// });
// test('Does the addDiv work?', () => {
//     const group = document.createElement('div');
//     const txt = "First Node"
//     // domP3.addDivSimple(group, txt);
//     domP3.addDivComplex(group, txt);
//     expect(group.children.length).toBe(1);
//     expect(group.children[0].textContent).toBe(txt);

// });