// --------------------- The functions FUNCTION -----------------------
let Rate1 = .15; //tax rates and tax brackets for canadian tax function.
let Rate2 = .205
let Rate3 = .26
let Rate4 = .29
let Rate5 = .33
let lim1 = 48535
let lim2 = 97069
let lim3 = 150473
let lim4 = 214368

const functions = {
    
    size: (num) => {
        if (num < 10) return "small";
        if (num < 20) return "medium";
        return "large";
    },

    add: (num1, num2) => {
        return  Number(num1) + Number(num2);             
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

    brackets: (taxableInc) => {
        if  (taxInc <= lim1 && taxInc >= 0) 
            return brack1Total = taxInc * Rate1

    } else if {(taxInc <= lim2 && taxInc > lim1)
        return brack2Total = (taxInc - (lim2 - lim1)) * Rate2
    
    } else if {(taxInc <= lim3 && taxInc > lim2)
        return brack3Total = (taxInc - (lim3 - lim2))* Rate3
   
    } else if {(taxInc <= lim4 && taxInc > lim3)
        return brack4Total = (taxInc -(lim4 - lim3)) * Rate4

    } else { brack5Total = (taxInc - lim4) * Rate5 };

    
    brackSUM: (taxableInc) => {
                return AllTax = (brack1Total + brack2Total + brack3Total +brack4Total +brack5Total); 
    },


   
            // let limit1 = 48535
            // let limit2 = 97069
            // let limit3 = 150473
            // let limit4 = 214368



    }



    // --------------------- The functions FUNCTION -----------------------




const taxFunct = {
    
    brack1: (taxInc) => {
        
        
    },

   

export default taxFunctions;














 };

export default functions;





