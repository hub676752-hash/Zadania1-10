// fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/JSON'
//             },
//             body: JSON.stringify({title:'Новый пост', body: 'Текст поста', users: 1})
//         })
//         .then(res => res.json())
//         .then(data => console.log("Успешно созданно: ", data));



const axios = require('axios');
axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'New post',
    body: 'Text post',
    userId: 1
})
.then(response => console.log("Успешно :) ", response.data));