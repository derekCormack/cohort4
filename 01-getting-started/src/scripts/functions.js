<<<<<<< HEAD
let x = 0;
let inputOne = 0;
// const arrayNew=[];

// --------------------- The functions  -----------------------
const rate1 = .15;  //tax rates and tax brackets for canadian tax function.
=======
// --------------------- The functions FUNCTION -----------------------

//ARRAY PROBLEM


const functions = {

  
    addToArray: (ArrayInput) => {
        var ArrayModified;
        ArrayModified.push("ArrayInput");
        return console.log(ArrayModified[]);
};

//    showArray: (ArrayInput) => {
//         var ArrayModified;
//         ArrayModified.push("ArrayInput");
//         return console.log(ArrayModified[]);
// };

        totalArray: (ArrayInput) => {
        var sumOfArray = 0;
        fo ( var i = 0, len =ArrayModified.length; i < len; i++) {
            arrayTotal += myData[i][1]; // iterate over array, grab next element add up.

        }
        console.log(arrayTotal);
        
};

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.toString();

































//------------------------------------------------------------tax functions-------------

//tax rates and tax brackets for canadian tax function.
const rate1 = .15;  
>>>>>>> 7fdea9a2d966dd523b135237351a81a48710c67a
const rate2 = .205;
const rate3 = .26;
const rate4 = .29;
const rate5 = .33;
const lim1 = 48534;// bracket limits
const lim2 = 97069;
const lim3 = 150473;
const lim4 = 214368;
const range1 = lim1 * rate1;     //tax per range
const range2 = (lim2 - lim1) * rate2;
const range3 = (lim3 - lim2) * rate3;
const range4 = (lim4 - lim3) * rate4;
// var idIncome = num.toFixed(2);


const functions = {
    //   Array functions list-------------------------------

    addingArray: (newArray, num) => {
        newArray.push(num);
        console.log(newArray)
        return newArray;
    },

    totalArr: (newArray) => {
        let total = 0;
        for (let i = 0; i < newArray.length; i++)
            total += newArray[i];
        return total;
    },

    clearArray: (newArray) => {
        newArray = [];
    },

    showArray: (newArray) => {
        idOutputArray.getElementById("idShowArray").innerHTML = newArray;

    },


    //  tax calc functions
    brackets: (receive) => {
        console.log(receive);
        if (receive > lim4) {
            console.log(receive, lim4, rate5);
            return Number(range1 + range2 + range3 + range4 + ((receive - lim4) * rate5));

        } else if (receive > lim3) {
            console.log(receive, lim4, rate4);
            return Number(range1 + range2 + range3 + ((receive - lim3) * rate4));

        } else if (receive > lim2) {
            console.log(receive, lim3, rate3);
            return Number(range1 + range2 + ((receive - lim2) * rate3));

        } else if (receive > lim1) {
            console.log(receive, lim2, rate2);
            return Number(range1 + ((receive - lim1) * rate2));

        } else {
            console.log(receive, lim1, rate1);
            return Number(receive * rate1);
        };
    },


    size: (num) => {
        if (num < 10) return "small";
        if (num < 20) return "medium";
        return "large";
    },

    add: (num1, num2) => {
        return Number(num1) + Number(num2);
    },

    subtract: (num1, num2) => {
        return Number(num1) - Number(num2);
    },

    multiply: (num1, num2) => {
        return Number(num1) * Number(num2);
    },

    divide: (num1, num2) => {
        return Number(num1) / Number(num2);
    },

    // brackets: (taxableInc) => {
    //                 console.log("taxableInc");
    //      var brack1Total = (range1 * rate1); console.log(brack1Total);
    //      var brack2Total = (range2 * rate2); console.log(brack2Total);
    //      var brack3Total = (range3 * rate3); console.log(brack3Total);
    //      var brack4Total = (range4 * rate4); console.log(brack4Total);
    //      var brack5Total = (range5 * rate5); console.log(brack5Total);
    //      return allTax = brack1Total + brack2Total + brack3Total +brack4Total +brack5Total
    // },
};


//taxableInc

// function toCelsius(fahrenheit) {
//     return (5/9) * (fahrenheit-32);
//   }
//   document.getElementById("demo").innerHTML = toCelsius(77);



// let limit1 = 48535
// let limit2 = 97069
// let limit3 = 150473
// let limit4 = 214368

// --------------------- The functions FUNCTION -----------------------

export default functions;





