const { SpotifyApi } = require("@spotify/web-api-ts-sdk");
const axios = require('axios');

const api = SpotifyApi.withClientCredentials(
  process.env.SPOTIFY_CLIENT_ID,
  process.env.SPOTIFY_CLIENTE_SECRET 
)

const getUser = async (req, res) => {
  const userId = req.params.userId;

  try {
    const response = await api.users.profile(userId);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json(error);
  }
}

const getUserAlbums = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await api.currentUser.albums.saveAlbums(id)
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json(error);
  }
}

//CRIAR UM ENPOINT PARA CADA TIPO DE PESQUISA -> ARTISTA, ALBUM OU PLAYLIST
const searchArtist = async (req, res) => {  
  const q = req.query['q'];
  const type = "artist";
  const limit = req.query['limit'];
  const offset = req.query['offset'];
  const market = "BR";
  const include_external = "audio";
  //Necessário implementar paginação no front-end
  
  try {
    const response = await api.search(q, [type], market, limit, offset, include_external);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json(error);
  }
}

const searchAlbum = async (req, res) => {  
  const q = req.query['q'];
  const type = "album";
  const limit = req.query['limit'];
  const offset = req.query['offset'];
  const market = "BR";
  const include_external = "audio";
  //Necessário implementar paginação no front-end
  
  try {
    const response = await api.search(q, [type], market, limit, offset, include_external);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json(error);
  }
}

const searchPlaylist = async (req, res) => {  
  const q = req.query['q'];
  const type = "playlist";
  const limit = req.query['limit'];
  const offset = req.query['offset'];
  const market = "BR";
  const include_external = "audio";
  //Necessário implementar paginação no front-end
  
  try {
    const response = await api.search(q, [type], market, limit, offset, include_external);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json(error);
  }
}

const getArtist = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await api.artists.get(id)
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json(error);
  }  
}

const getArtistAlbum = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await api.artists.albums(id)
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json(error);
  }  
}

const getArtistTopTracks = async (req, res) => {
  const id = req.params.id;
  const market = "BR";

  try {
    const response = await api.artists.topTracks(id, market);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json(error);
  }
}

const getRelatedArtists = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await api.artists.relatedArtists(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json(error);
  }
}

const getTrack = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await api.tracks.get(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json(error);
  }  
}

const getAudioFeatures = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await api.tracks.audioAnalysis(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json(error);
  }  
}

const getAudioAnalysis = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await api.tracks.audioAnalysis(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json(error);
  }  
}

const getCategories = async (req, res) => {
  const locale = "pt_BR;"
  const country = "BR";
  // const limit = 20;
  // const offset = 4;

  try {
    const response = await api.browse.getCategories(locale, country);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json(error);
  }
}

const getPlaylist = async (req, res) => {
  const playlist_id = req.params.playlist_id;
  const market = "BR";

  try {
    const response = await api.playlists.getPlaylist(playlist_id, market);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json(error);
  }  
}

const getAlbum = async (req, res) => {
  const id = req.params.id;
  const market = "BR";

  try {
    const response = await api.albums.get(id, market);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json(error);
  }  
}

const getLyrics = async (req, res) => {
  const art = req.query['art'];
  const mus = req.query['mus'];
  const apikey = process.env.API_KEY_VAGALUME;

  try {
    const response = await axios.get(`https://api.vagalume.com.br/search.php?art=${art}&mus=${mus}&apikey=${apikey}`);
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(404).json(error);
  }
}

module.exports = {
  getUser,
  getUserAlbums,
  searchArtist,
  searchAlbum,
  searchPlaylist,
  getArtist,
  getArtistAlbum,
  getArtistTopTracks,
  getRelatedArtists,
  getTrack,
  getAudioFeatures,
  getAudioAnalysis,
  getCategories,
  getPlaylist,
  getAlbum,
  getLyrics 
}