const { Router } = require('express');
const spotifyController = require('../controllers/spotifyController.js');

const router = Router();

router.get('/search', spotifyController.searchArthist);
router.get('/artists/:id', spotifyController.getArtist);
router.get('/artists/:id/albums', spotifyController.getAlbum);
router.get('/tracks/:id', spotifyController.getMusic);
router.get('/lyrics', spotifyController.getLyrics);

module.exports = router;