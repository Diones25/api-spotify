const { SpotifyApi } = require("@spotify/web-api-ts-sdk");
const axios = require('axios');

const api = SpotifyApi.withClientCredentials(
  process.env.SPOTIFY_CLIENT_ID,
  process.env.SPOTIFY_CLIENTE_SECRET 
)

const searchArthist = async (req, res) => {  
  const q = req.query['q'];
  const type = req.query['type'];
  
  const response = await api.search(q, [type]);

  return res.status(200).json(response);
}

const getArtist = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await api.artists.get(id)
    return res.status(200).json(response);
  } catch (error) {
    return res.json(error);
  }  
}

const getArtistAlbum = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await api.artists.albums(id)
    return res.status(200).json(response);
  } catch (error) {
    return res.json(error);
  }  
}

const getArtistTopTracks = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await api.artists.topTracks(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.json(error);
  }
}

const getRelatedArtists = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await api.artists.relatedArtists(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.json(error);
  }
}

const getTrack = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await api.tracks.get(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.json(error);
  }  
}

const getAudioFeatures = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await api.tracks.audioAnalysis(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.json(error);
  }  
}

const getAudioAnalysis = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await api.tracks.audioAnalysis(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.json(error);
  }  
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
  getArtistAlbum,
  getArtistTopTracks,
  getRelatedArtists,
  getTrack,
  getAudioFeatures,
  getAudioAnalysis,
  getLyrics 
}