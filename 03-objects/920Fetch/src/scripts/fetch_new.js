
//node-fetch - is a package which communicates with server...It provides, GET, POST, PUT and DELETE requests

const fetch = require('node-fetch');

const functions = {

    url: 'https://jsonplaceholder.typicode.com/users',

    //My URL for Airline Reservation System:
    // http://django-env.eba-wgpvstzd.us-east-1.elasticbeanstalk.com/airline/gettrips/?route_id=274&depart_date=2020-4-17

    //Link for node-fetch documentation:
    //https://www.npmjs.com/package/node-fetch#post-with-json

    //For GET request:
    async getUsers() {
        const response = await fetch(functions.url);
    },

    //For POST request:
    async postUser() {
        const response = await fetch(functions.url, {
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
        return response.json();
    }
}


export default functions;