// const promise1 = new Promise(resolve => setTimeout(() => resolve(1), 500))
// const promise2 = new Promise(resolve => setTimeout(() => resolve(11), 500))
// const promise3 = new Promise(resolve => setTimeout(() => resolve(111), 500))
// const promise4 = new Promise(resolve => setTimeout(() => resolve(1111), 500))
// const promise5 = new Promise(resolve => setTimeout(() => resolve(11111), 500))
// const promise6 = new Promise(resolve => setTimeout(() => resolve(111111), 500))

// Promise.all([promise1, promise2, promise3, promise4, promise5, promise6])
// .then(([promise1, promise2, promise3, promise4, promise5, promise6]) => {
//     console.log(promise1);
//      console.log(promise2);
//       console.log(promise3);
//         console.log(promise4);
//         console.log(promise5);
//         console.log(promise6);

// })





// Promise.all([                                                  */с исп сайта*/
// fetch('https://jsonplaceholder.typicode.com/users/1').then(r => r.json()),
// fetch('https://jsonplaceholder.typicode.com/post/1').then(r => r.json())
// ])
// .then(([user, post]) => console.log("Пользователь и пост ", user, post))
// .catch(err => console.log("Ошибка ", err));



// const axios = require('axios');
// Promise.all([
// axios.get('https://jsonplaceholder.typicode.com/users/1'),
// axios.get('https://jsonplaceholder.typicode.com/post/1')

// ])
// .then(([userRes, postRes]) => console.log("Пользователь и пост ", userRes.data, postRes.data));

