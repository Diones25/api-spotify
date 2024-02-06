const api = require('../service/api.js'); 
const axios = require('axios');

const searchArthist = async (req, res) => {  
  const q = req.query['q'];
  const type = req.query['type'];
  const include_external = req.query['include_external'];
  const response = await api.get(`/search?q=${q}&type=${type}&include_external=${include_external}`);

  return res.status(200).json(response.data);
}

const getArtist = async (req, res) => {
  const id = req.params.id;
  const response = await api.get(`/artists/${id}`);
 
  return res.status(200).json(response.data);
}

const getAlbum = async (req, res) => {
  const id = req.params.id;
  const response = await api.get(`/artists/${id}/albums`); 

  return res.status(200).json(response.data);  
}

const getMusic = async (req, res) => {
  const id = req.params.id;
  const response = await api.get(`/tracks/${id}`);

  return res.status(200).json(response.data);  
}

const getLyrics = async (req, res) => {
  const art = req.query['art'];
  const mus = req.query['mus'];
  const apikey = '08875fa30073d4a22dda7e89e6ae5289';

  const response = await axios.get(`https://api.vagalume.com.br/search.php?art=${art}&mus=${mus}&apikey=${apikey}`);
  return res.status(200).json(response.data);
}

module.exports = {
  searchArthist,
  getArtist,
  getAlbum,
  getMusic,
  getLyrics 
}