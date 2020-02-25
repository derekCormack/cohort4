const functions = {
    
    size: (num) => {
        if (num < 10) return "small";
        if (num < 20) return "medium";
        return "large";
    },

    add: (num1, num2) => {
        return num1 + num2;
    },
    
    isEven: (value) =>  {
        return value % 2 == 0;
    },
        
    makePizza: (toppingOne, toppingTwo) =>  {
        let pizza = toppingOne + " " + toppingTwo
    return pizza;
    },

    pick7: (toppingOne, toppingTwo) =>  {
        let pizza = toppingOne + " " + toppingTwo
    return pizza;

},


    add: (num1, num2) => {
        return num1 + num2;
    },

    IsLargerThan9:(num) => {
        return num>9;
    },




};

export default functions;


/* string */
    /*
    var pizza = "mushroom"; 
    
    /* boolean */

    //  var B = Boolean(10 > 9)  

    /* array  */

    // var pizza = ["pepperoni", "ham", "veggie"];
    
    /*  dictionary / objects
    undefined
sample if / else
functions
    parameters
    returns 
    
    function myFunction(p1, p2) {
        return p1 * p2;              // The function returns the product of p1 and p2
    }

arrays
    add to the front
    add to the end
    update values
loops 
    for
    for/in
    while
    do while
    forEach (with array and function)
Objects / Dictionaries
    declare object
    lookup key to retrieve value */