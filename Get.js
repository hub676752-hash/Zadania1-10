// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
// .then(json => console.log(json))



const axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/users')
.then(response => console.log("Users: ", response.data));