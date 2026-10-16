
// async function time(url, ms) {
//       const controller = new AbortController();
//       const timeoutId = setTimeout(() => controller.abort(), ms);

//       try {
//           let response = await fetch(url, { signal: controller.signal });
//           clearTimeout(timeoutId);
//           return await response.json();
//       } catch (error) {
//           if (error.name === 'AbortError') {
//               console.log("Запрос отменен по таймауту!");
//           } else {
//               console.log("Другая ошибка:", error);
//           }
//       }
//   }

//   time('https://jsonplaceholder.typicode.com/photos', 100);








const axios = require('axios');
   axios.get('https://jsonplaceholder.typicode.com/photos', { timeout: 100 })
      .catch(error => {
          if (error.code === 'ECONNABORTED') {
              console.log("Запрос отменен по таймауту!");
          }
      });