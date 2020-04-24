
const functions = {

    url: 'https://jsonplaceholder.typicode.com/users',

    getFirstName(data) {
        return data.name;
    }

    //how do you call an API?

    //with the help of Promises

}

 
export default functions;
   

    // async showDelaySolution() {
    //     try {
    //         console.log('One');
    //         const value = await                 // Simulate fetch
    //             new Promise(
    //                 (resolve, reject) =>
    //                     setTimeout(() => resolve("Two"),
    //                         1 * 2000));
    //         // Now that we have the value we can use it.
    //         console.log(value);
    //         console.log('Three');
    //     } catch (error) {
    //         console.log(error);
    //     }
    // },

    // async getUsers() {
    //     try {
    //         const response = await fetch(functions.url);
    //         const data = await response.json();
    //         return data;
    //     } catch (error) {
    //         console.error('Error:', error);
    //         throw (error);
    //     }
    // },

    // async workWithData() {
    //     const data = await functions.getUsers();
    //     console.log(functions.getFirstName(data));
    //     console.log(functions.getAllFirstNames(data));


//mozilla docs
// Example POST method implementation:
// async function postData(url = '', data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       mode: 'cors', // no-cors, *cors, same-origin
//       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: 'same-origin', // include, *same-origin, omit
//       headers: {
//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: 'follow', // manual, *follow, error
//       referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
//   }
  
//   postData('https://example.com/answer', { answer: 42 })
//     .then((data) => {
//       console.log(data); // JSON data parsed by `response.json()` call
//     });



