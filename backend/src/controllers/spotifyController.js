const { SpotifyApi } = require("@spotify/web-api-ts-sdk");
const axios = require('axios');

const api = SpotifyApi.withClientCredentials(
  process.env.SPOTIFY_CLIENT_ID,
  process.env.SPOTIFY_CLIENTE_SECRET 
)

const search = async (req, res) => {  
  const q = req.query['q'];
  const type = req.query['type'];
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

const home = (req, res) => {
  return res.status(200).json("Hello");
}

module.exports = {
  search,
  getLyrics,
  home
}