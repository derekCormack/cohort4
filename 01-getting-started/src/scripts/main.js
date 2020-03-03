import functions from './functions.js';

// Add the event listeners
 
idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

idAdd.addEventListener('click', (() => {
    idNumberSize.textContent = functions.add();
    console.log("click", idNum1.value, idNum2.value);
}));
