
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






