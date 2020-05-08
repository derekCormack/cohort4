import functions from './fetch'

//global.fetch = require('node-fetch');

/*
    These are destructive tests. The URL will have its data
    blown away.
    These tests were created to give a fairly comprehensive example
    on how to interact with an API. It does the full CRUD. Comments
    are appreciated.
*/

//const url = 'https://jsonplaceholder.typicode.com/users';


// test("Get all first name of data", ()=> {
//   expect(functions.getAllFirstNames(data)).toEqual(["Leanne Graham", "Ervin Howell", "Clementine Bauch", "Patricia Lebsack", "Chelsey Dietrich", "Mrs. Dennis Schulist", "Kurtis Weissnat", "Nicholas Runolfsdottir V", "Glenna Reichert", "Clementina DuBuque"]);
// })

//---------------------------------------------------------------------------

//Test cases for actual API data....

// test("Get All users", async (done) => {
//   const data = await functions.getUsers();
//   expect(data[0].email).toEqual("Sincere@april.biz");
//   done();
// })

//In Promises -   use .then() to subscribe   ******   single purpose.
//In Observables - we use .subscribe() to subscribe   ****** much like a stream of data.  subject pushes to all subscribed observers!
// https://rxjs-dev.firebaseapp.com/guide/observable

test("is the Actual API working?", async (done) => {
  let response = undefined;
  await functions.getUsersWithActualPromiseAPICall().then(resolve => {
    console.log("API is working");
    response = JSON.parse(resolve);
  }, reject => {
    console.error("Failed!", error);
  });

  console.log("what's in the response.email", response[0]); // [
  expect(response[0].email).toEqual("Sincere@april.biz");
  done();
})


test("is the POST API working?", async (done) => {
  let url = 'https://jsonplaceholder.typicode.com/users'
  let object = {
    id: 20,
    name: 'Derek',
    username: 'derek_username',
    email: 'derek@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: { lat: '-37.3159', lng: '81.1496' }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  }
  const data = await functions.postData(url, object);
  console.log("Posted data on server: ", data);
  done();
})

//https://web.dev/promises/



// test("Check with actual API data", () => {
//     const data = functions.
// })

// test('test that the fetch works?', async () => {

//   const clients = [
//     { key: 1, name: "Larry" },
//     { key: 2, name: "Lorraine" },
//   ]

//   // Check that the server is running and clear any data
//   let data = await postData(url + 'clear');

//   data = await postData(url + 'all');
//   expect(data.status).toEqual(200);
//   expect(data.length).toBe(0);

//   data = await postData(url + 'add', clients[0]);
//   expect(data.status).toEqual(200);

//   data = await postData(url + 'all');
//   expect(data.status).toEqual(200);
//   expect(data.length).toBe(1);
//   expect(data[0].name).toBe("Larry");

//   // add a second with the same key which should be an error
//   data = await postData(url + 'add', clients[0]);
//   expect(data.status).toEqual(400);

//   // add a second which should be ok
//   data = await postData(url + 'add', clients[1]);
//   expect(data.status).toEqual(200);

//   data = await postData(url + 'all');
//   expect(data.status).toEqual(200);
//   expect(data.length).toBe(2);
//   expect(data[1].name).toBe("Lorraine");

//   data = await postData(url + 'read', { key: 1 });
//   expect(data.status).toEqual(200);
//   expect(data.length).toBe(1);
//   expect(data[0].name).toBe("Larry");

//   data = await postData(url + 'update', { key: 1, name: "George" });
//   expect(data.status).toEqual(200);

//   data = await postData(url + 'read', { key: 1 });
//   expect(data.status).toEqual(200);
//   expect(data.length).toBe(1);
//   expect(data[0].name).toBe("George");

//   data = await postData(url + 'delete', { key: 1 });
//   expect(data.status).toEqual(200);

//   data = await postData(url + 'read', { key: 1 });
//   expect(data.status).toEqual(400);
// });


// async function postData(url = '', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'POST',     // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors',       // no-cors, *cors, same-origin
//     cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow',         // manual, *follow, error
//     referrer: 'no-referrer',    // no-referrer, *client
//     body: JSON.stringify(data)  // body data type must match "Content-Type" header
//   });

//   const json = await response.json();    // parses JSON response into native JavaScript objects
//   json.status = response.status;
//   json.statusText = response.statusText;
//   // console.log(json, typeof(json));
//   return json;
// }


