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

    // let array10 = [0,1,2,3,4,5,6,7,8,9]
    checksArray:(array10) => {
        return array10[2];
    },

    isObject (value) {
        return value && typeof value === 'object'
         && value.constructor === Object;        
    },

    isUndefined:(array10) => {
        return array10[2]
    },

    ifBeer: (time) => { 
    if (time < 17) {
    return "Coffee time";
  } else {
    return "Beer time";
  }

}

};



export default functions;







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