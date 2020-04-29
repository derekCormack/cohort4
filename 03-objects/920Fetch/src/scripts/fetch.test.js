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

// const data = [
//   {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },
//   {
//     "id": 2,
//     "name": "Ervin Howell",
//     "username": "Antonette",
//     "email": "Shanna@melissa.tv",
//     "address": {
//       "street": "Victor Plains",
//       "suite": "Suite 879",
//       "city": "Wisokyburgh",
//       "zipcode": "90566-7771",
//       "geo": {
//         "lat": "-43.9509",
//         "lng": "-34.4618"
//       }
//     },
//     "phone": "010-692-6593 x09125",
//     "website": "anastasia.net",
//     "company": {
//       "name": "Deckow-Crist",
//       "catchPhrase": "Proactive didactic contingency",
//       "bs": "synergize scalable supply-chains"
//     }
//   },
//   {
//     "id": 3,
//     "name": "Clementine Bauch",
//     "username": "Samantha",
//     "email": "Nathan@yesenia.net",
//     "address": {
//       "street": "Douglas Extension",
//       "suite": "Suite 847",
//       "city": "McKenziehaven",
//       "zipcode": "59590-4157",
//       "geo": {
//         "lat": "-68.6102",
//         "lng": "-47.0653"
//       }
//     },
//     "phone": "1-463-123-4447",
//     "website": "ramiro.info",
//     "company": {
//       "name": "Romaguera-Jacobson",
//       "catchPhrase": "Face to face bifurcated interface",
//       "bs": "e-enable strategic applications"
//     }
//   },
//   {
//     "id": 4,
//     "name": "Patricia Lebsack",
//     "username": "Karianne",
//     "email": "Julianne.OConner@kory.org",
//     "address": {
//       "street": "Hoeger Mall",
//       "suite": "Apt. 692",
//       "city": "South Elvis",
//       "zipcode": "53919-4257",
//       "geo": {
//         "lat": "29.4572",
//         "lng": "-164.2990"
//       }
//     },
//     "phone": "493-170-9623 x156",
//     "website": "kale.biz",
//     "company": {
//       "name": "Robel-Corkery",
//       "catchPhrase": "Multi-tiered zero tolerance productivity",
//       "bs": "transition cutting-edge web services"
//     }
//   },
//   {
//     "id": 5,
//     "name": "Chelsey Dietrich",
//     "username": "Kamren",
//     "email": "Lucio_Hettinger@annie.ca",
//     "address": {
//       "street": "Skiles Walks",
//       "suite": "Suite 351",
//       "city": "Roscoeview",
//       "zipcode": "33263",
//       "geo": {
//         "lat": "-31.8129",
//         "lng": "62.5342"
//       }
//     },
//     "phone": "(254)954-1289",
//     "website": "demarco.info",
//     "company": {
//       "name": "Keebler LLC",
//       "catchPhrase": "User-centric fault-tolerant solution",
//       "bs": "revolutionize end-to-end systems"
//     }
//   },
//   {
//     "id": 6,
//     "name": "Mrs. Dennis Schulist",
//     "username": "Leopoldo_Corkery",
//     "email": "Karley_Dach@jasper.info",
//     "address": {
//       "street": "Norberto Crossing",
//       "suite": "Apt. 950",
//       "city": "South Christy",
//       "zipcode": "23505-1337",
//       "geo": {
//         "lat": "-71.4197",
//         "lng": "71.7478"
//       }
//     },
//     "phone": "1-477-935-8478 x6430",
//     "website": "ola.org",
//     "company": {
//       "name": "Considine-Lockman",
//       "catchPhrase": "Synchronised bottom-line interface",
//       "bs": "e-enable innovative applications"
//     }
//   },
//   {
//     "id": 7,
//     "name": "Kurtis Weissnat",
//     "username": "Elwyn.Skiles",
//     "email": "Telly.Hoeger@billy.biz",
//     "address": {
//       "street": "Rex Trail",
//       "suite": "Suite 280",
//       "city": "Howemouth",
//       "zipcode": "58804-1099",
//       "geo": {
//         "lat": "24.8918",
//         "lng": "21.8984"
//       }
//     },
//     "phone": "210.067.6132",
//     "website": "elvis.io",
//     "company": {
//       "name": "Johns Group",
//       "catchPhrase": "Configurable multimedia task-force",
//       "bs": "generate enterprise e-tailers"
//     }
//   },
//   {
//     "id": 8,
//     "name": "Nicholas Runolfsdottir V",
//     "username": "Maxime_Nienow",
//     "email": "Sherwood@rosamond.me",
//     "address": {
//       "street": "Ellsworth Summit",
//       "suite": "Suite 729",
//       "city": "Aliyaview",
//       "zipcode": "45169",
//       "geo": {
//         "lat": "-14.3990",
//         "lng": "-120.7677"
//       }
//     },
//     "phone": "586.493.6943 x140",
//     "website": "jacynthe.com",
//     "company": {
//       "name": "Abernathy Group",
//       "catchPhrase": "Implemented secondary concept",
//       "bs": "e-enable extensible e-tailers"
//     }
//   },
//   {
//     "id": 9,
//     "name": "Glenna Reichert",
//     "username": "Delphine",
//     "email": "Chaim_McDermott@dana.io",
//     "address": {
//       "street": "Dayna Park",
//       "suite": "Suite 449",
//       "city": "Bartholomebury",
//       "zipcode": "76495-3109",
//       "geo": {
//         "lat": "24.6463",
//         "lng": "-168.8889"
//       }
//     },
//     "phone": "(775)976-6794 x41206",
//     "website": "conrad.com",
//     "company": {
//       "name": "Yost and Sons",
//       "catchPhrase": "Switchable contextually-based project",
//       "bs": "aggregate real-time technologies"
//     }
//   },
//   {
//     "id": 10,
//     "name": "Clementina DuBuque",
//     "username": "Moriah.Stanton",
//     "email": "Rey.Padberg@karina.biz",
//     "address": {
//       "street": "Kattie Turnpike",
//       "suite": "Suite 198",
//       "city": "Lebsackbury",
//       "zipcode": "31428-2261",
//       "geo": {
//         "lat": "-38.2386",
//         "lng": "57.2232"
//       }
//     },
//     "phone": "024-648-3804",
//     "website": "ambrose.net",
//     "company": {
//       "name": "Hoeger LLC",
//       "catchPhrase": "Centralized empowering task-force",
//       "bs": "target end-to-end models"
//     }
//   }
// ]

// test('test the copy and paste data locally', () => {
//   expect(data[0].name).toEqual("Leanne Graham");
// })

// test("test Ervin Howell's zipcode", () => {
//   expect(data[1].address.zipcode).toEqual("90566-7771");
// })

// test("Get first name of data", ()=> {
//   expect(functions.getFirstName(data[1])).toBe("Ervin Howell");
// })


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

//In Promises - we use .then() to subscribe   ******   single purpose.
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


