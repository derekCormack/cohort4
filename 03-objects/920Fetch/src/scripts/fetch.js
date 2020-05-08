//Referring a node-fetch package which we installed for calling APIs
//node-fetch behaves like Http client module: https://www.npmjs.com/package/node-fetch
const fetch = require('node-fetch');

//declare function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;

const functions = {

  url: 'https://jsonplaceholder.typicode.com/users',  //url is like a Endpoint of API

  getFirstName(data) {
    return data.name;
  },

  getAllFirstNames(data) {
    //map() -> takes 3 arguments, 1st object, 2nd index, 3rd whole data
    return data.map((d, i, x) => d.name); //d = d would iterate thru's all objects, i=index (i)
  },

  showDelayProblem() {
    console.log('One');
    setTimeout(() => {          // Simulates a fetch
      console.log("Two");
    }, 1 * 1000);
    console.log('Three');       // We have a problem Huston
  },

  async getUsers() {
    //this method will fetch all users i.e. the data which we hardcoded
    const response = await fetch(functions.url); // this.http.get(url);
    //const data = response.json();

    if (response.ok) {
      const data = await response.json();
      return data;
    }

    //No need to use .then() or resolve the promise!!! since fetch() handles internally...
  },

  //https://web.dev/promises/             sample from.
  getUsersWithActualPromiseAPICall() {
    // Return a new promise.
    return new Promise(function (resolve, reject) {
      // Do the usual XHR stuff
      var req = new XMLHttpRequest();

      //XMLHttpRequest - this has methods which can be called
      //0 method - open()
      //1st method is onload - which is responsible for resolving and rejecting the promise based on what you get from server
      //2nd method is onerror - which is responsible for error handling
      //3rd method is send - responsible for communicating with server
      req.open('GET', functions.url);

      // req.onload(() => {
      //     if (req.status == 200) {
      //         // Resolve the promise with the response text
      //         resolve(req.response);
      //       }
      //       else {
      //         // Otherwise reject with the status text
      //         // which will hopefully be a meaningful error
      //         reject(Error(req.statusText));
      //       }
      // })

      req.onload = function () {
        // This is called even on 404 etc
        // so check the status
        if (req.status == 200) {
          // Resolve the promise with the response text
          resolve(req.response);
        }
        else {
          // Otherwise reject with the status text
          // which will hopefully be a meaningful error
          reject(Error(req.statusText));
        }
      };

      // Handle network errors
      req.onerror = function () {
        //do something on UI when you get error
        reject(Error("Network Error"));
      };

      // Make request
      req.send();
    });
  },

  async postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin //Cross-origin resource sharing
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
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



