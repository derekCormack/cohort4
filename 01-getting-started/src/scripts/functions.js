// --------------------- The functions FUNCTION -----------------------

var num1;
var num2;
var calcTotal;


const functions = {
    
    size: (num) => {
        if (num < 10) return "small";
        if (num < 20) return "medium";
        return "large";
    },

    add: (num1, num2) => {
        return calcTotal = num1 + num2;
    },

    subtract: (num1, num2) => {
        return calcTotal = num1 - num2;
    },

    multipy (num1, num2) {
        return calcTotal = num1 * num2;
    },

    divide(num1, num2) {
        return calcTotal = num1 / num2;
    },

};

export default functions;
