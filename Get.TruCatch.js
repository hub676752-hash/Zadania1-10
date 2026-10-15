// async function truCatch() {
// try{
//     let response = await fetch('http://etot_sait_ne_shyshistvyet');
//     let data = await response.json();
//     console.log(data);
// }
//   catch{
//     console.log("Ну чет не работает");
// }
// }
// truCatch();



const axios = require('axios');
axios.get('http://etot_sait_ne_shyshistvyet')
.catch(error => console.log(error.message));