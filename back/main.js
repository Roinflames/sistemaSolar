const axios = require('axios');
const key = "DEMO_KE"
let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.nasa.gov/planetary/apod?api_key='+ key,
  headers: { }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});