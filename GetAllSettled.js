// const pro = [
//     new Promise(resolve => setTimeout(() => resolve(1), 3000)),
//     new Promise((resolve,reject) => setTimeout(() => reject('error'), 2000)),
//     new Promise(resolve => setTimeout(() => resolve(3), 1000)),
//     new Promise(resolve => setTimeout(() => resolve(4), 900))
// ]

// Promise.allSettled(pro) 
// .then(([response1, response2, response3, response4]) => {
//     console.log(response1)
//         console.log(response2)
//             console.log(response3)
//                 console.log(response4)


// })




// Promise.allSettled([                                 */С использованием сайта*/
// fetch('https://jsonplaceholder.typicode.com/users/1'),
// fetch('https://jsonplaceholder.typicode.com/post/1'),
// fetch('https://jsonplaceholder.typicode.com/posft/1'),
// fetch('https://jsonplaceholder.typicode.com/users/1'),
// ])
// .then(results => console.log("Ну тип результаты ", results));


// const axios = require('axios');
// Promise.allSettled([
// axios.get('https://jsonplaceholder.typicode.com/users/1'),
// axios.get('https://jsonplaceholder.typicode.com/posft/1'),
// axios.get('https://jsonplaceholder.typicode.com/users/1'),
// ])
// .then(results => console.log("Ну тип результаты ", results));

