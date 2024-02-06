var client_id = 'fcdaf5f755a545caafa7dff1b9318928';
var client_secret = 'd3553089b7e14c26be280c100eee086f';
const axios = require('axios');

const baseURL = 'https://api.spotify.com/v1';

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}
axios({
  url: 'https://accounts.spotify.com/api/token',
  method: 'post',
  headers: {
    'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64'),
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  params: {
    grant_type: 'client_credentials'
  }
}).then(response => { 

  const token = response.data.access_token;
  localStorage.setItem('token', token); 
  if(response.data.status == 401) {  
    localStorage.setItem('token', token) += localStorage.setItem('token', token)
  }
    
}).catch(error => {
  console.error('Erro ao obter token:', error.response ? error.response.data : error.message);
});

const api = axios.create({ 
  baseURL: baseURL,
  headers : {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json'
  },
});

module.exports = api;