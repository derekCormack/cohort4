//Referring a node-fetch package which we installed for calling APIs
//node-fetch behaves like Http client module: https://www.npmjs.com/package/node-fetch
const fetch = require('node-fetch');

const functions = {

  //If you had your API, it would be: 'localhost:4000/users'
  url: 'https://jsonplaceholder.typicode.com/users',  //url is like a Endpoint of API

  async getUsers() {
    //this method will fetch all users i.e. the data which we hardcoded
    const response = await fetch(functions.url); // this.http.get(url);
    console.log("What's coming from fetch/server? ", response);

    if (response.ok) {
      const data = await response.json();
      return data;
    }

    //No need to use .then() or resolve the promise!!! since fetch() handles internally...
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